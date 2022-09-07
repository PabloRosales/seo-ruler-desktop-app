import { hasDuplicateValueInKey } from '../hasDuplicateValueInKey';

describe('duplicateKeyValues', () => {
  it('should return false if no duplicate values', () => {
    expect(hasDuplicateValueInKey([{ a: 1 }, { a: 2 }], 'a')).toBe(false);
    expect(
      hasDuplicateValueInKey(
        [
          { a: 1, b: 1 },
          { a: 2, b: 2 },
        ],
        'b',
      ),
    ).toBe(false);
  });

  it('should return true if no duplicate keys', () => {
    expect(hasDuplicateValueInKey([{ a: 1 }, { a: 1 }], 'a')).toBe(true);
    expect(
      hasDuplicateValueInKey(
        [
          { a: 1, b: 2 },
          { a: 1, b: 2 },
        ],
        'b',
      ),
    ).toBe(true);
  });
});
