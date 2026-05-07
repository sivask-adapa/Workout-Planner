/**
 * state.js
 * Single source of truth for runtime state.
 * Import `state` wherever you need to read or write plans / logs.
 */

export const state = {
  /** @type {Array<{id:string, name:string, scheduledDays:number[], exercises:Array<{exId:string,sets:number,reps:number}>}>} */
  plans: [],

  /** @type {Object.<string,{checkedExIds:Set<string>,completed:boolean,completedAt:number|null}>} */
  todayLogs: {},

  /** Plan builder transient state */
  builder: {
    editingId:     null,
    selectedExIds: new Set(),
    exConfig:      {},       // { exId: { sets, reps } }
    selectedDays:  new Set(),
  },
};
