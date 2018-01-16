module.exports = function asArray(array) {
  return Array.isArray(array) ? array.map(asArray) : array;
};
