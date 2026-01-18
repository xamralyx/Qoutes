export function initAnalytics() {
  // init GA/Plausible here
}
export function trackEvent(name, props = {}) {
  try { if (typeof window !== 'undefined' && window.plausible) window.plausible(name, { props }); } catch {}
}
