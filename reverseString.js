const reverseString = (string) => {
  if (typeof string === 'string') {
    return string.split('').reverse().join('') || '';
  }
  throw new Error('error');
}

module.exports = reverseString;