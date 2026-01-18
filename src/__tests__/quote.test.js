import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuoteCard from '../components/QuoteCard';
import FavoriteButton from '../components/FavoriteButton';
import { useFavorites } from '../hooks/useFavorites';

describe('QuoteCard & FavoriteButton', () => {
  it('renders quote and triggers favorite via QuoteCard', () => {
    const onFavorite = vi.fn();
    const { getByText, getByLabelText } = render(
      <QuoteCard id="q1" text="hello" author="me" onFavorite={onFavorite} />
    );
    expect(getByText('hello')).toBeTruthy();
    expect(getByText('me')).toBeTruthy();
    const btn = getByLabelText('favorite quote');
    fireEvent.click(btn);
    expect(onFavorite).toHaveBeenCalledWith('q1');
  });

  it('FavoriteButton calls onToggle with id and shows pressed state', () => {
    const onToggle = vi.fn();
    const { getByRole } = render(<FavoriteButton id="q1" isFav={true} onToggle={onToggle} />);
    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(onToggle).toHaveBeenCalledWith('q1');
    expect(btn.getAttribute('aria-pressed')).toBe('true');
  });
});

describe('useFavorites', () => {
  it('toggles favorites state', () => {
    let result;
    function HookComponent() { result = useFavorites(); return null; }
    render(React.createElement(HookComponent));
    const id = 'test-1';
    expect(result.isFavorite(id)).toBe(false);
    result.toggleFavorite(id);
    expect(result.isFavorite(id)).toBe(true);
    result.toggleFavorite(id);
    expect(result.isFavorite(id)).toBe(false);
  });
});
