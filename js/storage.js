/**
 * storage.js
 * All persistence lives here. Currently uses localStorage so the app
 * works with any local server (no Claude artifact environment needed).
 *
 * To swap to a backend API, replace the functions below — nothing else
 * in the app needs to change.
 */

const PREFIX = 'replog_';

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

// ── Plans ──────────────────────────────────────────────────────────────────

export function loadPlans() {
  try {
    return JSON.parse(localStorage.getItem(`${PREFIX}plans`) || '[]');
  } catch (_) { return []; }
}

export function savePlans(plans) {
  localStorage.setItem(`${PREFIX}plans`, JSON.stringify(plans));
}

// ── Daily logs ─────────────────────────────────────────────────────────────

export function loadTodayLog() {
  try {
    const raw = JSON.parse(localStorage.getItem(`${PREFIX}log-${todayKey()}`) || '{}');
    // Revive checkedExIds arrays back into Sets
    for (const pid in raw) {
      raw[pid].checkedExIds = new Set(raw[pid].checkedExIds || []);
    }
    return raw;
  } catch (_) { return {}; }
}

export function saveTodayLog(todayLogs) {
  // Serialise Sets → arrays before storing
  const serialisable = {};
  for (const pid in todayLogs) {
    serialisable[pid] = {
      ...todayLogs[pid],
      checkedExIds: [...todayLogs[pid].checkedExIds],
    };
  }
  localStorage.setItem(`${PREFIX}log-${todayKey()}`, JSON.stringify(serialisable));
}

export function loadHistoryLogs(daysBack = 60) {
  const logs = [];
  for (let i = 1; i <= daysBack; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = `${PREFIX}log-${dateKey(d)}`;
    try {
      const raw = localStorage.getItem(key);
      if (raw) logs.push({ date: d, data: JSON.parse(raw) });
    } catch (_) {}
  }
  return logs;
}
