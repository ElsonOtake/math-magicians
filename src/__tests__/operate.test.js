import operate from '../logic/operate';

describe('operate functionality', () => {
  test('sum two values', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });
  test('subtraction two values', () => {
    expect(operate(2, 4, '-')).toBe('-2');
  });
  test('multiplication two values', () => {
    expect(operate(2, 4, 'x')).toBe('8');
  });
  test('division two values', () => {
    expect(operate(8, 4, '÷')).toBe('2');
  });
  test('division by zero', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('modulus two values', () => {
    expect(operate(10, 4, '%')).toBe('2');
  });
  test('modulus by zero', () => {
    expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
