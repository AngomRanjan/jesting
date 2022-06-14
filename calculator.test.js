const calculator = require('./calculator');

describe('Add', () => {
  test('2+5 to equals 7', () => {
    expect(calculator.add(2,5)).toBe(7);
  });

  test('2 + -5 to equals 7', () => {
    expect(calculator.add(2,-5)).toBe(-3);
  });
  
  test('should throw an error if called with a string', () => {
    expect(() => {
      calculator.add(2,'a');
    }).toThrow('Input Error');
  });
});

describe('Subtract', () => {
  test('2-5 to equals 7', () => {
    expect(calculator.subtract(2,5)).toBe(-3);
  });

  test('2 - -5 to equals 7', () => {
    expect(calculator.subtract(2,-5)).toBe(7);
  });

  test('10 -7 to equals 3', () => {
    expect(calculator.subtract(10,7)).toBe(3);
  });

  test('15 - 15 to equals 0', () => {
    expect(calculator.subtract(15,15)).toBe(0);
  });

  test('should throw an error if called with a string', () => {
    expect(() => {
      calculator.subtract(2,'a');
    }).toThrow('Input Error');
  });
});

describe('Multiply', () => {
  test('2 x 5 to equals 10', () => {
    expect(calculator.multiply(2,5)).toBe(10);
  });

  test('2 x -5 to equals -10', () => {
    expect(calculator.multiply(2,-5)).toBe(-10);
  });

  test('-10 x -7 to equals 70', () => {
    expect(calculator.multiply(-10,-7)).toBe(70);
  });

  test('15 x 0 to equals 0', () => {
    expect(calculator.multiply(15,0)).toBe(0);
  });

  test('should throw an error if called with a string', () => {
    expect(() => {
      calculator.multiply(2,'a');
    }).toThrow('Input Error');
  });
});

describe('Divide', () => {
  test('12 / 6 to equals 2', () => {
    expect(calculator.divide(12,6)).toBe(2);
  });

  test('12 x -6 to equals -2', () => {
    expect(calculator.divide(12,-6)).toBe(-2);
  });

  test('-10 / -2 to equals 5', () => {
    expect(calculator.divide(-10,-2)).toBe(5);
  });

  test('15 / 4  to beclose to 3.75', () => {
    expect(calculator.divide(15,4)).toBeCloseTo(3.75);
  });

  test('division by zero should throw error', () => {
    expect(() => {
      calculator.divide(2,0);
    }).toThrow('Input Error');
  });

  test('should throw an error if called with a string', () => {
    expect(() => {
      calculator.divide(2,'a');
    }).toThrow('Input Error');
  });
});