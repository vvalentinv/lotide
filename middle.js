const middle = function(array) {
  //...
  const result = [];
  const arrLength = array.length;
  if (arrLength === 0 || arrLength === 1 || arrLength === 2) {
    return result;
  } else if (arrLength % 2 === 1) {
    result.push(Math.ceil(arrLength / 2));
  } else {
    result.push(arrLength / 2);
    result.push((arrLength / 2) + 1);
  }
  return result;
};

module.exports = middle;
