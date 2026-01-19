export async function shareQuote({ text, author }) {
  const message = `${text} — ${author}`;
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'DailySpark Quote',
        text: message,
      });
      return { ok: true, method: 'web-share' };
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(message);
      alert('Quote copied to clipboard!');
      return { ok: true, method: 'clipboard' };
    }
    // Fallback: open mail client
    const mailto = `mailto:?subject=DailySpark%20Quote&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
    return { ok: true, method: 'mailto' };
  } catch (err) {
    console.error('Share failed', err);
    alert('Sharing failed. Please try again.');
    return { ok: false, error: err };
  }
}
