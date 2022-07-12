// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.lenght === 0) { return []}
  matrix.forEach((line) => {
     if (matrix.indexOf(line) % 2 !== 0) {
      line = line.reverse();
     }

  });
  matrix = matrix.flat()

  return matrix;
  // console.log(matrix);
};

