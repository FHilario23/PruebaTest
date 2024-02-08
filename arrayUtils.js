function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function averageArray(arr) {
  if (arr.length === 0) return NaN;
  return sumArray(arr) / arr.length;
}

module.exports = {
  sumArray,
  averageArray,
};
