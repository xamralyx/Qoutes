import React from 'react';

export default function CategoryFilter({ categories = [], value, onChange }) {
  return (
    <div role="toolbar" aria-label="category filter" style={{ display: 'flex', gap: 8 }}>
      <button onClick={() => onChange(null)} aria-pressed={value === null}>All</button>
      {categories.map((c) => (
        <button key={c} onClick={() => onChange(c)} aria-pressed={value === c}>{c}</button>
      ))}
    </div>
  );
}
