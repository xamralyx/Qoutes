import { useState, useEffect, useCallback } from 'react';
import { parseJsonSafe } from '../utils/json';
const STORAGE_KEY = 'sq:favorites:v1';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? parseJsonSafe(raw, {}) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  const isFavorite = useCallback((id) => !!favorites[id], [favorites]);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => setFavorites({}), []);

  return { favorites, isFavorite, toggleFavorite, clearFavorites };
}
