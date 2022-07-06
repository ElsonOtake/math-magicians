import calculate from "../logic/calculate";

const obj = {
  total: null,
  next: null,
  operation: null,
}

describe('calculate functionality', () => {

  test('click 1', () => {
    expect(calculate(obj, '1').next).toBe('1');
  });
  test('click 0', () => {
    expect(calculate(obj, '0').next).toBe('0');
  });
  test('click +', () => {
    expect(calculate(obj, '+').operation).toBe('+');
  });

});

const obj_2 = {
  total: null,
  next: '10',
  operation: null,
}

describe('calculate functionality', () => {

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