import calculate from '../logic/calculate';

const obj1 = {
  total: null,
  next: null,
  operation: null,
};

describe('calculate functionality with blank object', () => {
  test('click 1', () => {
    expect(calculate(obj1, '1').next).toBe('1');
  });
  test('click 0', () => {
    expect(calculate(obj1, '0').next).toBe('0');
  });
  test('click +', () => {
    expect(calculate(obj1, '+').operation).toBe('+');
  });
});

const obj2 = {
  total: null,
  next: '10',
  operation: null,
};

describe('calculate functionality with next filled', () => {
  test('click +', () => {
    expect(calculate(obj2, '+').total).toBe('10');
  });
  test('click +', () => {
    expect(calculate(obj2, '+').operation).toBe('+');
  });
  test('click 0', () => {
    expect(calculate(obj2, '0').next).toBe('100');
  });
});

const obj3 = {
  total: '10',
  next: null,
  operation: '+',
};

describe('calculate functionality with next null', () => {
  test('click 2', () => {
    expect(calculate(obj3, '2').next).toBe('2');
  });
});

const obj4 = {
  total: '10',
  next: '2',
  operation: '+',
};

describe('calculate functionality with object filled', () => {
  test('click +', () => {
    expect(calculate(obj4, '+').next).toBeNull();
  });
  test('click +/-', () => {
    expect(calculate(obj4, '+/-').next).toBe('-2');
  });
  test('click +', () => {
    expect(calculate(obj4, '+').total).toBe('12');
  });
  test('click =', () => {
    expect(calculate(obj4, '=').total).toBe('12');
  });
  test('click =', () => {
    expect(calculate(obj4, '=').operation).toBeNull();
  });
  test('click AC', () => {
    expect(calculate(obj4, 'AC').total).toBeNull();
  });
  test('click AC', () => {
    expect(calculate(obj4, 'AC').next).toBeNull();
  });
  test('click AC', () => {
    expect(calculate(obj4, 'AC').operation).toBeNull();
  });
});
