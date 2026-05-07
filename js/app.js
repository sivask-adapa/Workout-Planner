/**
 * app.js  —  Entry point (loaded as type="module" from index.html)
 *
 * Responsibilities:
 *  1. Bootstrap: load persisted data into state
 *  2. Tab routing: showView()
 *  3. Expose a global `App` object so inline onclick="" handlers in the HTML
 *     can call module functions without needing to import them per-template.
 */

import { state }                                          from './state.js';
import { loadPlans, loadTodayLog }                        from './storage.js';
import { resolveConfirm, closeConfirm, toggleDetail }     from './utils.js';
import { renderToday, handleExRowClick, logComplete, undoComplete } from './today.js';
import { renderPlans, deletePlan }                        from './plans.js';
import { renderHistory }                                  from './history.js';
import {
  openBuilder, closeBuilder, savePlan,
  filterLibrary, toggleLibEx, toggleDay, setCat,
  updateConfig, removeSelEx,
}                                                         from './builder.js';
import { DAYS, MONTHS }                                   from './data.js';

// ── Bootstrap ──────────────────────────────────────────────────────────────

function init() {
  // Hydrate shared state from storage
  state.plans     = loadPlans();
  state.todayLogs = loadTodayLog();

  // Header date
  const now = new Date();
  document.getElementById('headerDate').textContent =
    `${DAYS[now.getDay()]} · ${MONTHS[now.getMonth()]} ${now.getDate()}`;

  // Confirm modal ok button
  document.getElementById('confirmOkBtn').addEventListener('click', resolveConfirm);

  renderToday();
}

// ── Tab routing ────────────────────────────────────────────────────────────

function showView(name, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`view-${name}`).classList.add('active');
  btn.classList.add('active');
  if (name === 'today')   renderToday();
  if (name === 'plans')   renderPlans();
  if (name === 'history') renderHistory();
}

// ── Global App namespace (used by inline onclick="" in HTML) ───────────────
// Inline handlers in template-literal HTML cannot import ES modules directly,
// so we expose everything through a single `window.App` object.

window.App = {
  // routing
  showView,

  // today
  handleExRowClick,
  logComplete,
  undoComplete,

  // plans
  deletePlan,

  // builder
  openBuilder,
  closeBuilder,
  savePlan,
  filterLibrary,
  toggleLibEx,
  toggleDay,
  setCat,
  updateConfig,
  removeSelEx,

  // shared
  toggleDetail,
  closeConfirm,
};

init();
