const stringLength = require('./stringLength');
const reverseString = require('./reverseString')


describe('stringLength', () => {
  test('angom to equal 5', () => {
    expect(stringLength('angom')).toBe(5);
  });
  
  test('microverse to equal 10', () => {
    expect(stringLength('microverse')).toBe(10);
  });
  
  test('should throw an error if called with a number', () => {
    expect(() => {
      stringLength(45);
    }).toThrow('error');
  });
  
  test('Should throw error if call with empty string', () => {
    expect(() => {
      stringLength('');
    }).toThrow('error');
  });
  
  test('Should throw error if string length greater than ten', () => {
    expect(() => {
      stringLength('Beyond The Limit');
    }).toThrow('error');
  });
});

describe('ReverseDtring', () => {
  test('microverse to equal esrevorcim', () => {
    expect(reverseString('microverse')).toBe('esrevorcim');
  });
  
  test('should throw an error if called with a number', () => {
    expect(() => {
      reverseString(45);
    }).toThrow('error');
  });
});

describe('capitalizeString', () => {
  test('microverse to equal Microverse', () => {
    expect(capitalize('microverse')).toBe('Microverse');
  });
  
  test('should throw an error if called with a number', () => {
    expect(() => {
      capitalize(45);
    }).toThrow('error');
  });
});
