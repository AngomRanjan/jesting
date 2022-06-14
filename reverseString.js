const reverseString = (string) => {
  if (typeof string === 'string') {
    if (string === '') {
      return reverseString;
    }
    return string.split('').reverse().join('');
  }
  throw new Error('error');
}

module.exports = reverseString;