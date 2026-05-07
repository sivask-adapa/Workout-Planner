/**
 * today.js
 * Renders the Today tab: scheduled workouts, exercise check-off, and logging.
 */

import { exById, TIME_BASED_IDS, DAYS, MONTHS } from './data.js';
import { lazyLoadImages } from './imageEngine.js';
import { saveTodayLog } from './storage.js';
import { getGreeting, toast } from './utils.js';
import { state } from './state.js';

function stepsHTML(ex) {
  return ex.steps.map((s, i) =>
    `<li class="detail-step">
       <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
       <span class="step-text">${s}</span>
     </li>`
  ).join('');
}

function detailPanel(ex, planId) {
  const panelId = `detail-today-${ex.id}-${planId}`;
  return {
    panelId,
    html: `<div class="ex-detail-panel" id="${panelId}">
      <div class="detail-img-wrap"
           data-img-queries='${JSON.stringify(ex.imgQueries)}'
           data-emoji="${ex.emoji}">
        <img alt="${ex.name}">
        <div class="detail-img-gradient"></div>
      </div>
      <div class="detail-body">
        <div class="detail-label">How To Do It</div>
        <ul class="detail-steps">${stepsHTML(ex)}</ul>
        <div class="detail-tip"><strong>💡 Pro Tip</strong>${ex.tips}</div>
      </div>
    </div>`,
  };
}

export function renderToday() {
  const now = new Date();
  const dow = now.getDay();

  document.getElementById('greetingText').textContent = getGreeting();
  document.getElementById('greetingDate').textContent =
    `${DAYS[dow]}, ${MONTHS[now.getMonth()]} ${now.getDate()} · ${now.getFullYear()}`;

  const todayPlans = state.plans.filter(p => p.scheduledDays.includes(dow));
  const container  = document.getElementById('todayContent');

  if (!todayPlans.length) {
    container.innerHTML = `
      <div class="rest-day">
        <div class="rest-icon">🛋️</div>
        <h3>Rest Day</h3>
        <p>No workouts scheduled today. Recover and recharge!</p>
        <button class="btn btn-ghost" style="margin-top:16px;"
          onclick="App.showView('plans', document.querySelectorAll('.tab-btn')[1])">
          View My Plans →
        </button>
      </div>`;
    return;
  }

  container.innerHTML = todayPlans.map(plan => {
    const log      = state.todayLogs[plan.id] || { checkedExIds: new Set(), completed: false };
    const total    = plan.exercises.length;
    const done     = log.checkedExIds.size;
    const pct      = total ? Math.round((done / total) * 100) : 0;
    const complete = log.completed;

    const rows = plan.exercises.map(e => {
      const ex = exById(e.exId);
      if (!ex) return '';
      const checked  = log.checkedExIds.has(e.exId);
      const unit     = TIME_BASED_IDS.has(e.exId) ? 'sec' : 'reps';
      const { panelId, html: panel } = detailPanel(ex, plan.id);

      return `
        <div class="ex-row-wrap">
          <div class="ex-row${checked ? ' checked' : ''}"
               onclick="App.handleExRowClick(event,'${plan.id}','${e.exId}')">
            <div class="ex-check">${checked ? '✓' : ''}</div>
            <div class="ex-thumb"
                 data-img-queries='${JSON.stringify(ex.imgQueries)}'
                 data-emoji="${ex.emoji}">
              <img alt="${ex.name}">
            </div>
            <div class="ex-info">
              <div class="ex-name">${ex.name}</div>
              <div class="ex-detail">${ex.muscles} · ${e.sets}×${e.reps} ${unit}</div>
            </div>
            <button class="expand-btn"
                    onclick="event.stopPropagation();App.toggleDetail(this,'${panelId}')"
                    title="How to do it">▾</button>
          </div>
          ${panel}
        </div>`;
    }).join('');

    const badge = complete
      ? `<span class="session-badge badge-done">✓ Done</span>`
      : done > 0
        ? `<span class="session-badge badge-partial">${done}/${total}</span>`
        : `<span class="session-badge badge-pending">Pending</span>`;

    return `
      <div class="session-card${complete ? ' done' : ''}">
        <div class="session-head">
          <div>
            <div class="session-name">${plan.name}</div>
            <div class="session-meta">
              ${total} exercises · ${plan.exercises.reduce((a, e) => a + e.sets, 0)} total sets
            </div>
          </div>
          ${badge}
        </div>
        <div class="progress-bar">
          <div class="progress-fill${complete ? ' complete' : ''}" style="width:${pct}%"></div>
        </div>
        <div class="ex-list">${rows}</div>
        <div class="session-footer">
          <div class="completion-text">
            <strong>${done}</strong> of <strong>${total}</strong> completed
          </div>
          ${complete
            ? `<button class="btn btn-ghost btn-sm" onclick="App.undoComplete('${plan.id}')">↩ Undo</button>`
            : `<button class="btn btn-green btn-sm"
                 onclick="App.logComplete('${plan.id}')"
                 ${done === 0 ? 'style="opacity:.5"' : ''}>Log Complete</button>`
          }
        </div>
      </div>`;
  }).join('');

  lazyLoadImages(container);
}

export async function handleExRowClick(event, planId, exId) {
  if (event.target.closest('.expand-btn')) return;
  if (!state.todayLogs[planId]) {
    state.todayLogs[planId] = { checkedExIds: new Set(), completed: false };
  }
  const log = state.todayLogs[planId];
  if (log.completed) return;
  log.checkedExIds.has(exId) ? log.checkedExIds.delete(exId) : log.checkedExIds.add(exId);
  saveTodayLog(state.todayLogs);
  renderToday();
}

export async function logComplete(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan) return;
  if (!state.todayLogs[planId]) {
    state.todayLogs[planId] = { checkedExIds: new Set(), completed: false };
  }
  plan.exercises.forEach(e => state.todayLogs[planId].checkedExIds.add(e.exId));
  state.todayLogs[planId].completed    = true;
  state.todayLogs[planId].completedAt  = Date.now();
  saveTodayLog(state.todayLogs);
  toast('🎉 Workout logged!');
  renderToday();
}

export async function undoComplete(planId) {
  if (state.todayLogs[planId]) {
    state.todayLogs[planId].completed   = false;
    state.todayLogs[planId].completedAt = null;
  }
  saveTodayLog(state.todayLogs);
  renderToday();
}
