# RepLog — Workout Planner

A dark-themed workout planner that lets you build plans, schedule them by day of
the week, and log your sessions. Exercise cards show Wikipedia/Commons photos and
expandable step-by-step instructions.

---

## Project structure

```
replog/
├── index.html          ← App shell (no logic — just HTML + link/script tags)
├── css/
│   └── styles.css      ← All styles (design tokens, components, responsive)
├── js/
│   ├── app.js          ← Entry point; bootstraps app and exposes window.App
│   ├── state.js        ← Shared runtime state (plans, todayLogs, builder)
│   ├── data.js         ← EXERCISES array + helper constants
│   ├── imageEngine.js  ← Wikimedia Commons image fetching + lazy-loading
│   ├── storage.js      ← localStorage persistence (easy to swap for an API)
│   ├── utils.js        ← uid, toast, confirm dialog, toggleDetail
│   ├── today.js        ← Today view: render, check-off, log complete
│   ├── plans.js        ← Plans view: render, delete
│   ├── builder.js      ← Plan builder overlay: library, config, save
│   └── history.js      ← History view: render past sessions
└── README.md
```

---

## Running locally

The app uses ES modules (`type="module"`), which browsers block over the
`file://` protocol. You need a local HTTP server — any of these work:

### Option 1 — Node (npx, no install needed)
```bash
cd replog
npx serve .
# Open http://localhost:3000
```

### Option 2 — Python
```bash
cd replog
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option 3 — VS Code Live Server extension
Right-click `index.html` → **Open with Live Server**.

---

## Adding a new exercise

Open `js/data.js` and append an entry to the `EXERCISES` array:

```js
{
  id:         'myex',                  // unique short ID
  cat:        'strength',              // strength | cardio | bw | core | hiit | flex | sport | mind
  catLabel:   'Strength',
  emoji:      '🏋️',
  name:       'My Exercise',
  muscles:    'Target muscles',
  defSets:    3,
  defReps:    10,
  imgQueries: ['my exercise fitness', 'my exercise gym'], // tried in order
  steps:      ['Step one.', 'Step two.', 'Step three.'],
  tips:       'A pro tip about the exercise.',
},
```

No other file needs changing.

---

## Swapping the storage backend

All reads and writes go through `js/storage.js`. Replace `localStorage` calls
there with `fetch()` calls to your API and nothing else needs to change.

---

## Swapping the image provider

All image logic lives in `js/imageEngine.js`. Replace `tryCommonsSearch()` and
`tryWikiThumb()` with your own source (Unsplash API, your CDN, etc.) and the
rest of the app is unaffected.

---

## Tech stack

| Layer    | Choice                          |
|----------|---------------------------------|
| Language | Vanilla JS (ES modules)         |
| Styles   | Plain CSS with custom properties|
| Images   | Wikimedia Commons REST API      |
| Storage  | localStorage (no build step)    |
| Server   | Any static file server          |

No bundler, no framework, no dependencies to install.
