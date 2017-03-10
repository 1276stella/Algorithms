/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length === 0) {
    return [];
  }    
  var totalRow = matrix.length, totalCol = matrix[0].length;
  var total = totalRow * totalCol;
  var row = 0, col = 0, i = 0; 
  var result = [];
  while(result.length < total) {
    for(col = i; col < totalCol - i; col++) {
      result.push(matrix[row][col]);
    }
    col--;
    for(row = i + 1; row < totalRow - i; row++) {
      result.push(matrix[row][col]);
    }
    row--;
    // if only one row/col remains
    if(totalRow - 2 * i === 1 || totalCol - 2 * i === 1) {
      break;
    }
    for(col = totalCol - 2 - i; col >= i; col--) {
      result.push(matrix[row][col]);
    }
    col++;
    for(row = totalRow - 2 - i; row >= i + 1; row--) {
      result.push(matrix[row][col]);
    }    
    row++;
    i++;
  }  
  return result;
};

var matrix = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];
console.log(spiralOrder(matrix));