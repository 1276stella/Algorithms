/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Version 1 
// var binarySearch = function(array, target) {
//   var start = 0, end = array.length - 1;
//   while(start + 1 < end) {
//     var mid = Math.floor((end - start) / 2) + start;
//     if(target < array[mid]) {
//       end = mid;
//     } else if(target > array[mid]) {
//       start = mid;
//     } else {
//       return true;
//     }
//   }

//   if(target === array[start] || target === array[end]) {
//     return true;
//   } 
//   return false;
// } 
// var searchMatrix = function(matrix, target) {
//   if(matrix.length === 0) {
//     return false;
//   }
//   var rowNum = matrix.length,
//       colNum = matrix[0].length;    
//   if(target < matrix[0][0] || target > matrix[rowNum - 1][colNum - 1]) {
//     return false;
//   }  

//   for(var i = 0; i < rowNum; i++) {
//     if(target >= matrix[i][0] && target <= matrix[i][colNum - 1]) {
//       if(binarySearch(matrix[i], target)) {
//         return true;
//       }
//     }
//     if(target < matrix[i][0]) {
//       break;
//     }
//   }
//   return false;
// };

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]

// Version 2
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) {
    return false;
  }
  var rowNum = matrix.length,
      colNum = matrix[0].length;    
  if(target < matrix[0][0] || target > matrix[rowNum - 1][colNum - 1]) {
    return false;
  } 
  // from bottom left to top right
  var x = rowNum - 1;
  var y = 0;   
  while(x >= 0 && y < colNum) {
    if(target > matrix[x][y]) {
      y++;
    } else if(target < matrix[x][y]) {
      x--;
    } else {
      return true;
    }
  }
  return false;
}
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

matrix = [];
matrix.push([1]);
console.log(searchMatrix(matrix, 1)); // true