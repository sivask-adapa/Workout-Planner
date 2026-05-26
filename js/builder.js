/**
 * builder.js
 * All logic for the New / Edit Plan builder overlay:
 *  - exercise library with search + category filter
 *  - selected exercises list with sets/reps config
 *  - day-of-week scheduler
 *  - save / update plan
 */

import { EXERCISES, exById, TIME_BASED_IDS, DAYS } from './data.js';
import { lazyLoadImages } from './imageEngine.js';
import { savePlans } from './storage.js';
import { uid, toast } from './utils.js';
import { state } from './state.js';
import { renderPlans } from './plans.js';

const CAT_LABELS = {
  all: 'All', strength: 'Strength', cardio: 'Cardio', bw: 'Bodyweight',
  core: 'Core', hiit: 'HIIT', flex: 'Flexibility', sport: 'Sport', mind: 'Mind-Body',
  dumbbells: 'Dumbbells',
};

let activeCat = 'all';

// ── Open / close ───────────────────────────────────────────────────────────

export function openBuilder(editId = null) {
  const b = state.builder;
  b.editingId     = editId;
  b.selectedExIds = new Set();
  b.exConfig      = {};
  b.selectedDays  = new Set();

  if (editId) {
    const plan = state.plans.find(p => p.id === editId);
    if (plan) {
      document.getElementById('planNameInput').value = plan.name;
      plan.exercises.forEach(e => {
        b.selectedExIds.add(e.exId);
        b.exConfig[e.exId] = { sets: e.sets, reps: e.reps };
      });
      plan.scheduledDays.forEach(d => b.selectedDays.add(d));
    }
    document.getElementById('builderTitleLabel').textContent = 'Edit Plan';
  } else {
    document.getElementById('planNameInput').value = '';
    document.getElementById('builderTitleLabel').textContent = 'New Workout Plan';
  }

  activeCat = 'all';
  _buildDaySelector();
  _buildCatFilter();
  filterLibrary();
  _renderSelectedExercises();
  document.getElementById('builderOverlay').classList.add('open');
}

export function closeBuilder() {
  document.getElementById('builderOverlay').classList.remove('open');
}

// ── Day selector ───────────────────────────────────────────────────────────

function _buildDaySelector() {
  document.getElementById('daySelector').innerHTML = DAYS.map((d, i) =>
    `<div class="day-toggle ${state.builder.selectedDays.has(i) ? 'active' : ''}"
          onclick="App.toggleDay(${i}, this)">${d}</div>`
  ).join('');
}

export function toggleDay(i, el) {
  const days = state.builder.selectedDays;
  days.has(i) ? days.delete(i) : days.add(i);
  el.classList.toggle('active', days.has(i));
}

// ── Category filter ────────────────────────────────────────────────────────

function _buildCatFilter() {
  const cats = ['all', ...new Set(EXERCISES.map(e => e.cat))];
  document.getElementById('catFilter').innerHTML = cats.map(c =>
    `<div class="cat-pill ${c === activeCat ? 'active' : ''}"
          onclick="App.setCat('${c}', this)">${CAT_LABELS[c]}</div>`
  ).join('');
}

export function setCat(cat, el) {
  activeCat = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  filterLibrary();
}

// ── Library list ───────────────────────────────────────────────────────────

export function filterLibrary() {
  const q     = (document.getElementById('libSearch')?.value || '').toLowerCase().trim();
  const items = EXERCISES.filter(e =>
    (activeCat === 'all' || e.cat === activeCat) &&
    (!q || e.name.toLowerCase().includes(q) || e.muscles.toLowerCase().includes(q))
  );

  const container = document.getElementById('libList');
  if (!items.length) {
    container.innerHTML =
      `<div style="text-align:center;padding:40px 20px;color:var(--muted2);font-size:13px;">
         No exercises found
       </div>`;
    return;
  }

  container.innerHTML = items.map(e => {
    const sel     = state.builder.selectedExIds.has(e.id);
    const panelId = `detail-lib-${e.id}`;
    const steps   = e.steps.map((s, i) =>
      `<li class="detail-step">
         <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
         <span class="step-text">${s}</span>
       </li>`
    ).join('');

    return `
      <div class="lib-item-wrap">
        <div class="lib-item ${sel ? 'selected' : ''}" onclick="App.toggleLibEx('${e.id}')">
          <div class="lib-thumb"
               data-img-queries='${JSON.stringify(e.imgQueries)}'
               data-emoji="${e.emoji}">
            <img alt="${e.name}">
          </div>
          <div class="lib-info">
            <div class="lib-name">${e.name}</div>
            <div class="lib-muscles">${e.muscles}</div>
          </div>
          <button class="expand-btn" style="margin-right:4px;"
                  onclick="event.stopPropagation();App.toggleDetail(this,'${panelId}')"
                  title="How to do it">▾</button>
          <div class="lib-add-btn">${sel ? '✓' : '+'}</div>
        </div>
        <div class="lib-detail-panel" id="${panelId}">
          <div class="detail-img-wrap"
               data-img-queries='${JSON.stringify(e.imgQueries)}'
               data-emoji="${e.emoji}">
            <img alt="${e.name}">
            <div class="detail-img-gradient"></div>
          </div>
          <div class="detail-body">
            <div class="detail-label">How To Do It</div>
            <ul class="detail-steps">${steps}</ul>
            <div class="detail-tip"><strong>💡 Pro Tip</strong>${e.tips}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  lazyLoadImages(container);
}

export function toggleLibEx(exId) {
  const ex = exById(exId);
  if (!ex) return;
  const b = state.builder;
  if (b.selectedExIds.has(exId)) {
    b.selectedExIds.delete(exId);
    delete b.exConfig[exId];
  } else {
    b.selectedExIds.add(exId);
    b.exConfig[exId] = { sets: ex.defSets, reps: ex.defReps };
  }
  filterLibrary();
  _renderSelectedExercises();
}

// ── Selected exercises panel ───────────────────────────────────────────────

function _renderSelectedExercises() {
  const container = document.getElementById('selectedExList');
  const countEl   = document.getElementById('selCount');
  const ids        = [...state.builder.selectedExIds];
  countEl.textContent = `${ids.length} exercise${ids.length !== 1 ? 's' : ''} selected`;

  if (!ids.length) {
    container.innerHTML =
      `<div class="empty-selection">
         <div class="empty-icon">📋</div>
         <p>Select exercises from the library to build your plan.</p>
       </div>`;
    return;
  }

  container.innerHTML = ids.map(exId => {
    const ex   = exById(exId);
    if (!ex) return '';
    const cfg    = state.builder.exConfig[exId] || { sets: ex.defSets, reps: ex.defReps };
    const isTime = TIME_BASED_IDS.has(exId);
    return `
      <div class="sel-ex-row">
        <div class="sel-ex-info">
          <div class="sel-ex-name">${ex.name}</div>
          <div class="sel-ex-cat">${ex.catLabel} · ${ex.muscles}</div>
        </div>
        <div class="sets-reps">
          <input class="num-input" type="number" min="1" max="99" value="${cfg.sets}"
                 oninput="App.updateConfig('${exId}','sets',this.value)" title="Sets">
          <span class="sets-label">sets</span>
          <input class="num-input" type="number" min="1" max="999" value="${cfg.reps}"
                 oninput="App.updateConfig('${exId}','reps',this.value)"
                 title="${isTime ? 'Seconds' : 'Reps'}">
          <span class="sets-label">${isTime ? 'sec' : 'reps'}</span>
        </div>
        <button class="sel-remove" onclick="App.removeSelEx('${exId}')" title="Remove">×</button>
      </div>`;
  }).join('');
}

export function updateConfig(exId, field, val) {
  if (!state.builder.exConfig[exId]) state.builder.exConfig[exId] = {};
  state.builder.exConfig[exId][field] = parseInt(val) || 1;
}

export function removeSelEx(exId) {
  state.builder.selectedExIds.delete(exId);
  delete state.builder.exConfig[exId];
  filterLibrary();
  _renderSelectedExercises();
}

// ── Save ───────────────────────────────────────────────────────────────────

export function savePlan() {
  const b    = state.builder;
  const name = document.getElementById('planNameInput').value.trim();
  if (!name)               return toast('Please enter a plan name', true);
  if (!b.selectedExIds.size) return toast('Add at least one exercise', true);
  if (!b.selectedDays.size)  return toast('Select at least one scheduled day', true);

  const exercises = [...b.selectedExIds].map(exId => {
    const cfg = b.exConfig[exId] || {};
    const ex  = exById(exId);
    return { exId, sets: cfg.sets || ex.defSets, reps: cfg.reps || ex.defReps };
  });

  if (b.editingId) {
    const idx = state.plans.findIndex(p => p.id === b.editingId);
    if (idx >= 0) {
      state.plans[idx] = { ...state.plans[idx], name, exercises, scheduledDays: [...b.selectedDays] };
    }
  } else {
    state.plans.push({ id: uid(), name, exercises, scheduledDays: [...b.selectedDays] });
  }

  savePlans(state.plans);
  closeBuilder();
  toast(b.editingId ? '✏️ Plan updated!' : '✅ Plan saved!');
  renderPlans();
}
