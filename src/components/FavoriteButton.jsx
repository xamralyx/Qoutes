import React from 'react';
import PropTypes from 'prop-types';

export default function FavoriteButton({ id, isFav, onToggle }) {
  return (
    <button
      aria-pressed={!!isFav}
      aria-label={isFav ? 'unfavorite quote' : 'favorite quote'}
      onClick={() => onToggle && onToggle(id)}
      style={{
        padding: '6px 10px',
        borderRadius: 6,
        border: '1px solid #ccc',
        background: isFav ? '#ffecec' : '#fff',
      }}
    >
      {isFav ? '♥ Favorited' : '♡ Favorite'}
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFav: PropTypes.bool,
  onToggle: PropTypes.func,
};

FavoriteButton.defaultProps = {
  isFav: false,
  onToggle: undefined,
};
