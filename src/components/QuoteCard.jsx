import React from 'react';

export default function QuoteCard({ id, text, author, onFavorite }) {
  return (
    <article aria-label="quote" style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
      <p style={{ margin: 0 }}>{text}</p>
      <footer style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <small aria-hidden>{author || '—'}</small>
        <button aria-label="favorite quote" onClick={() => onFavorite && onFavorite(id)} style={{ padding: '4px 8px' }}>
          ♡ Favorite
        </button>
      </footer>
    </article>
  );
}
