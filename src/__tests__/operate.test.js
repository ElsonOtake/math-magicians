import operate from '../logic/operate.js';

describe('operate functionality', () => {
  test('sums two values', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });
});