/**
 * history.js
 * Renders the History tab from stored daily logs.
 */

import { exById, DAYS, MONTHS } from './data.js';
import { loadHistoryLogs } from './storage.js';
import { state } from './state.js';

export function renderHistory() {
  const container = document.getElementById('historyGrid');
  const logs      = loadHistoryLogs(60);

  if (!logs.length) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="big">NO HISTORY YET</div>
        <p>Complete your first workout to see it here.</p>
      </div>`;
    return;
  }

  container.innerHTML = logs.flatMap(({ date, data }) => {
    const dow = date.getDay();
    return Object.entries(data).map(([planId, logData]) => {
      const plan       = state.plans.find(p => p.id === planId);
      const planName   = plan ? plan.name : 'Deleted Plan';
      const checkedIds = new Set(logData.checkedExIds || []);
      const isComplete = logData.completed;
      const total      = plan ? plan.exercises.length : checkedIds.size;
      const done       = checkedIds.size;

      const exTags = plan
        ? plan.exercises.map(e => {
            const ex = exById(e.exId);
            return ex
              ? `<span class="hist-ex-tag ${checkedIds.has(e.exId) ? 'done' : ''}">${ex.name}</span>`
              : '';
          }).join('')
        : '';

      return `
        <div class="hist-card ${isComplete ? 'completed' : 'missed'}">
          <div class="hist-date-block">
            <div class="hist-day">${date.getDate()}</div>
            <div class="hist-month">${MONTHS[date.getMonth()]}</div>
            <div class="hist-month">${DAYS[dow]}</div>
          </div>
          <div class="hist-info">
            <div class="hist-plan-name">${planName}</div>
            <div class="hist-detail">${done} of ${total} exercises done</div>
            <div class="hist-status ${isComplete ? 'done' : 'missed'}">
              ${isComplete ? '✓ Completed' : '✗ Incomplete'}
            </div>
            <div class="hist-exs">${exTags}</div>
          </div>
        </div>`;
    });
  }).join('');
}
