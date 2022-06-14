const calculator = {
  
add (a,b) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  throw new Error('Input Error');
},
multiply (a,b) {
  if (typeof a === 'number' && typeof b === 'number') return a * b;
  throw new Error('Input Error');
},
divide (a,b) {
  if (typeof a === 'number' && typeof b === 'number' && b !== 0) return a / b;
  throw new Error('Input Error');
},
subtract (a,b) {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  throw new Error('Input Error');
},
};

module.exports = calculator;
