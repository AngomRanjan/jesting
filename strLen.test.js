const stringLength = require('./stringLength');

test('angom to equal 5', () => {
  expect(stringLength('angom')).toBe(5);
});

test('angom to equal 5', () => {
  expect(stringLength('angom ranjan')).toBe(12);
});