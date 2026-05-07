/**
 * imageEngine.js
 * Fetches exercise images from Wikimedia Commons with Wikipedia fallback.
 * Results are cached in memory to avoid duplicate network requests.
 *
 * To swap in a different image provider (e.g. Unsplash, your own CDN),
 * replace tryCommonsSearch() and tryWikiThumb() — the rest of the app
 * only calls fetchImage() and lazyLoadImages().
 */

const imgCache = {};
const BAD_EXT  = /\.(svg|gif|pdf|tiff?|xcf)(\?|$)/i;
const BAD_NAME = /(icon|logo|flag|map|symbol|diagram|chart|coat|seal|sign|banner|crest|shield)/i;

function isGoodImage(url, title = '') {
  if (!url) return false;
  if (BAD_EXT.test(url)) return false;
  if (BAD_NAME.test(title)) return false;
  return true;
}

async function tryCommonsSearch(query) {
  try {
    const res = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6` +
      `&srsearch=${encodeURIComponent(query)}&srlimit=8&format=json&origin=*`
    );
    const json = await res.json();
    for (const hit of (json.query?.search || [])) {
      if (BAD_NAME.test(hit.title)) continue;
      const r2 = await fetch(
        `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(hit.title)}` +
        `&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json&origin=*`
      );
      const j2 = await r2.json();
      const thumb = Object.values(j2.query?.pages || {})[0]?.imageinfo?.[0]?.thumburl;
      if (isGoodImage(thumb, hit.title)) return thumb;
    }
  } catch (_) {}
  return null;
}

async function tryWikiThumb(query) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(query)}` +
      `&prop=pageimages&format=json&pithumbsize=400&origin=*`
    );
    const json = await res.json();
    const src = Object.values(json.query?.pages || {})[0]?.thumbnail?.source;
    if (isGoodImage(src, query)) return src;
  } catch (_) {}
  return null;
}

/**
 * Tries each query string in order until an image is found.
 * @param {string[]} queries  - list of search terms, most specific first
 * @returns {Promise<string|null>}
 */
export async function fetchImage(queries) {
  for (const q of queries) {
    if (imgCache[q] != null) return imgCache[q];
    imgCache[q] = null; // prevent concurrent duplicate fetches
    const url = (await tryCommonsSearch(q)) || (await tryWikiThumb(q));
    if (url) { imgCache[q] = url; return url; }
  }
  return null;
}

/**
 * Attaches IntersectionObserver lazy-loading to every [data-img-queries] element
 * inside `container`.  Elements load only when scrolled into view (+ 300px margin).
 * @param {HTMLElement} container
 */
export function lazyLoadImages(container) {
  container.querySelectorAll('[data-img-queries]').forEach(wrap => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const queries = JSON.parse(wrap.dataset.imgQueries);
      const emoji   = wrap.dataset.emoji || '💪';
      const img     = wrap.querySelector('img');
      const url     = await fetchImage(queries);

      if (url && img) {
        img.onload = () => {
          img.classList.add('loaded');
          wrap.classList.add('img-loaded');
        };
        img.src = url;
      } else {
        wrap.innerHTML = `<div class="thumb-fallback">${emoji}</div>`;
        wrap.classList.add('img-loaded');
      }
    }, { rootMargin: '300px' });

    observer.observe(wrap);
  });
}
