/**
 * utils.js
 * Shared utilities: unique IDs, toast notifications, confirm dialog, greeting.
 */

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

// ── Toast ──────────────────────────────────────────────────────────────────

let toastTimer = null;

export function toast(msg, isError = false) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = isError ? 'error show' : 'show';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ── Confirm dialog ─────────────────────────────────────────────────────────

let _confirmCb = null;

export function showConfirm(title, msg, cb) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = msg;
  _confirmCb = cb;
  document.getElementById('confirmModal').classList.add('open');
}

export function closeConfirm() {
  document.getElementById('confirmModal').classList.remove('open');
  _confirmCb = null;
}

export function resolveConfirm() {
  if (_confirmCb) _confirmCb();
  closeConfirm();
}

// ── Detail panel toggle ────────────────────────────────────────────────────

import { lazyLoadImages } from './imageEngine.js';

export function toggleDetail(btn, panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  if (isOpen) lazyLoadImages(panel);
}
