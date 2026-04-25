// Astro migration: replaced node `events` import with a tiny browser-friendly emitter.
class TinyEmitter {
  constructor() {
    this._listeners = new Map();
  }
  on(event, fn) {
    if (!this._listeners.has(event)) this._listeners.set(event, new Set());
    this._listeners.get(event).add(fn);
    return this;
  }
  off(event, fn) {
    this._listeners.get(event)?.delete(fn);
    return this;
  }
  emit(event, ...args) {
    this._listeners.get(event)?.forEach((fn) => fn(...args));
    return this;
  }
  removeListener(event, fn) {
    return this.off(event, fn);
  }
  removeAllListeners(event) {
    if (event) this._listeners.delete(event);
    else this._listeners.clear();
    return this;
  }
}

export const eventEmitter = new TinyEmitter();
