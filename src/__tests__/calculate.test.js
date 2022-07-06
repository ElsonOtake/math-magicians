import calculate from "../logic/calculate";

const obj_1 = {
  total: null,
  next: null,
  operation: null,
}

describe('calculate functionality with blank object', () => {

  test('click 1', () => {
    expect(calculate(obj_1, '1').next).toBe('1');
  });
  test('click 0', () => {
    expect(calculate(obj_1, '0').next).toBe('0');
  });
  test('click +', () => {
    expect(calculate(obj_1, '+').operation).toBe('+');
  });

});

const obj_2 = {
  total: null,
  next: '10',
  operation: null,
}

describe('calculate functionality with next filled', () => {

  test('click +', () => {
    expect(calculate(obj_2, '+').total).toBe('10');
  });
  test('click +', () => {
    expect(calculate(obj_2, '+').operation).toBe('+');
  });
  test('click 0', () => {
    expect(calculate(obj_2, '0').next).toBe('100');
  });
});

const obj_3 = {
  total: '10',
  next: null,
  operation: '+',
}

describe('calculate functionality with next null', () => {

  test('click 2', () => {
    expect(calculate(obj_3, '2').next).toBe('2');
  });
});

const obj_4 = {
  total: '10',
  next: '2',
  operation: '+',
}

describe('calculate functionality with object filled', () => {

  test('click +', () => {
    expect(calculate(obj_4, '+').next).toBeNull();
  });
  test('click +/-', () => {
    expect(calculate(obj_4, '+/-').next).toBe('-2');
  });
  test('click +', () => {
    expect(calculate(obj_4, '+').total).toBe('12');
  });
  test('click =', () => {
    expect(calculate(obj_4, '=').total).toBe('12');
  });
  test('click =', () => {
    expect(calculate(obj_4, '=').operation).toBeNull();
  });
  test('click AC', () => {
    expect(calculate(obj_4, 'AC').total).toBeNull();
  });
  test('click AC', () => {
    expect(calculate(obj_4, 'AC').next).toBeNull();
  });
  test('click AC', () => {
    expect(calculate(obj_4, 'AC').operation).toBeNull();
  });
});