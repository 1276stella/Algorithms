/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  if(n <= 0) {
    return 0;
  }
  var totalSolution = 0;
  var dfs = function(n, currentBoard, row) {
    if(row === n) {
      totalSolution++;
      return;
    }
    for(var col = 0; col < n; col++) {
      if(!hasConflict(currentBoard, col, row)) {
        currentBoard.push(col);
        dfs(n, currentBoard, row + 1);
        currentBoard.pop();
      }
    }
  };
  dfs(n, [], 0);
  return totalSolution;
};

var hasConflict = function(currentBoard, col, row) {
  if(currentBoard.indexOf(col) !== -1) {
    return true;
  }
  for(var i = 0; i < currentBoard.length; i++) {
    var row_i = i;
    var col_i = currentBoard[i];
    if(col_i - col === row_i - row || col_i - col === -(row_i - row)) {
      return true;
    }
  }
  return false;
};

console.log(totalNQueens(4)); // 2
