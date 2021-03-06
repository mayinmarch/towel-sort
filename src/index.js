module.exports = function towelSort (matrix) {
  let sorted = [];
  if (!matrix) {
    return sorted;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      sorted.push(...matrix[i]);
    } else {
      sorted.push(...matrix[i].reverse());
    }
  }
  return sorted;
}
