import { describe, it, expect } from 'vitest';
import { makeShuffledOrder } from '../utils/quoteShuffle';

describe('makeShuffledOrder', () => {
  it('returns a permutation of indices', () => {
    const len = 25;
    const order = makeShuffledOrder(len, 123);
    expect(order).toHaveLength(len);
    const set = new Set(order);
    expect(set.size).toBe(len);
    for (let i = 0; i < len; i++) expect(set.has(i)).toBe(true);
  });
});
