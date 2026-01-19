import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { useQuotes } from '../hooks/useQuotes';
import { act } from 'react-dom/test-utils';

describe('useQuotes', () => {
  it('loads sample quotes and toggles favorite', () => {
    let api;
    function Harness() { api = useQuotes(); return null; }
    render(React.createElement(Harness));
    expect(api.quotes.length).toBeGreaterThan(0);
    const first = api.quotes[0];
    act(() => { api.toggleFavorite(first.id); });
    const after = api.quotes.find((q) => q.id === first.id);
    expect(after.favorite).toBe(true);
  });
});
