/**
 * plans.js
 * Renders the My Plans tab and handles plan deletion.
 */

import { DAYS } from './data.js';
import { savePlans } from './storage.js';
import { toast, showConfirm } from './utils.js';
import { state } from './state.js';

export function renderPlans() {
  const container = document.getElementById('plansList');

  if (!state.plans.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="big">NO PLANS YET</div>
        <p>Create your first workout plan to get started.</p>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="App.openBuilder()">
          + New Plan
        </button>
      </div>`;
    return;
  }

  container.innerHTML = state.plans.map(plan => {
    const totalSets = plan.exercises.reduce((a, e) => a + e.sets, 0);
    const dayPills  = DAYS.map((d, i) =>
      `<span class="day-pill ${plan.scheduledDays.includes(i) ? 'active' : 'inactive'}">${d}</span>`
    ).join('');

    return `
      <div class="plan-card">
        <div class="plan-icon">💪</div>
        <div class="plan-info">
          <div class="plan-name">${plan.name}</div>
          <div class="plan-meta">${plan.exercises.length} exercises · ${totalSets} total sets</div>
          <div class="plan-days">${dayPills}</div>
        </div>
        <div class="plan-actions">
          <button class="btn-icon" title="Edit"   onclick="App.openBuilder('${plan.id}')">✏️</button>
          <button class="btn-icon" title="Delete" onclick="App.deletePlan('${plan.id}')">🗑️</button>
        </div>
      </div>`;
  }).join('');
}

export function deletePlan(id) {
  const plan = state.plans.find(p => p.id === id);
  if (!plan) return;
  showConfirm(
    'Delete Plan?',
    `"${plan.name}" will be permanently deleted.`,
    () => {
      state.plans = state.plans.filter(p => p.id !== id);
      savePlans(state.plans);
      toast('Plan deleted');
      renderPlans();
    }
  );
}
