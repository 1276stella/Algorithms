/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) {
    return false;
  }
  var rowNum = matrix.length,
      colNum = matrix[0].length;    
  if(target < matrix[0][0] || target > matrix[rowNum - 1][colNum - 1]) {
    return false;
  }  

  // find the row index
  var start = 0, end = rowNum - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(target < matrix[mid][0]) {
      end = mid;
    } else if(target > matrix[mid][0]) {
      start = mid;
    } else {
      return true;
    }
  }

  if(target >= matrix[end][0]) {
    row = end;
  } else if(target >= matrix[start][0]) {
    row = start;
  } else {
    return false;
  }

  // find the column index
  start = 0, end = colNum - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(target < matrix[row][mid]) {
      end = mid;
    } else if(target > matrix[row][mid]) {
      start = mid;
    } else {
      return true;
    }
  }
 
  if(target === matrix[row][start] || target === matrix[row][end]) {
    return true;
  }
  return false;
};

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]

var matrix = [];
matrix.push([1,   3,  5,  7]);
matrix.push([10, 11, 16, 20]);
matrix.push([23, 30, 34, 50]);
console.log(searchMatrix(matrix, 3)); // true
var matrix = [];
matrix.push([1,   3,  5,  7]);
matrix.push([10, 11, 16, 20]);
matrix.push([23, 30, 34, 50]);
console.log(searchMatrix(matrix, 30)); // true