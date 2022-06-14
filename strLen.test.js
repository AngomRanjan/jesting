const stringLength = require('./stringLength');

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