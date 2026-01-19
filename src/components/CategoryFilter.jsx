import React from 'react';
import PropTypes from 'prop-types';

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

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  categories: [],
  value: null,
  onChange: undefined,
};
