const stringLength = (string = '') => {
  if (string.length < 1 || string.length > 10 || typeof string !== 'string') {
    throw new Error('error');
  }
  return string.length;
}

module.exports = stringLength;