import { useState, useEffect, useCallback } from 'react';

const SAMPLE_QUOTES = [
  { id: 'q1', text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { id: 'q2', text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
];

export function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => setQuotes(SAMPLE_QUOTES), []);
  const toggleFavorite = useCallback((id) => {
    if (!id) return;
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, favorite: !q.favorite } : q)));
  }, []);
  return { quotes, toggleFavorite };
}
