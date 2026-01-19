export function initAnalytics() {
  // Placeholder: initialize GA/Plausible here
}
export function trackEvent(name, props = {}) {
  try {
    if (typeof name !== 'string' || !name.trim()) return false;
    const safeProps = props && typeof props === 'object' ? props : {};
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(name, { props: safeProps });
      return true;
    }
  } catch (e) {
    // ignore analytics errors
  }
  return false;
}
