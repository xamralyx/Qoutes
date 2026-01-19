export function validateQuotes(quotes) {
  if (!Array.isArray(quotes)) return [];
  return quotes.filter((q) =>
    q && typeof q.text === 'string' && q.text.trim().length > 0 && typeof q.author === 'string'
  );
}
