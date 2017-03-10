/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if(n <= 0) {
    return [];
  }
  var solution = [];
  dfs(n, [], 0, solution);
  return formatSolution(solution);
};

// solution for n = 4: [ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ]
// solution[i] is one solution
// solution[i][j] is the index of the positioned column
var dfs = function(n, currentBoard, row, solution) {
  if(row === n) {
    solution.push(currentBoard.slice());
    return;
  }
  for(var col = 0; col < n; col++) {
    if(!hasConflict(currentBoard, col, row)) {
      currentBoard.push(col);
      dfs(n, currentBoard, row + 1, solution);
      currentBoard.pop();
    }
  }
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

var formatSolution = function(solution) {
  if(solution.length === 0) {
    return [];
  }
  var n = solution[0].length;
  var formattedSolution = [];

  var temp = [];
  for(var i = 0; i < n; i++) {
    temp.push('.');
  }
  var line = temp.join('');

  for(var i = 0; i < solution.length; i++) {
    formattedSolution[i] = [];
    for(var j = 0; j < n; j++) {
      var k = solution[i][j];
      var formattedLine = line.substring(0, k) + 'Q' + line.substring(k + 1, n);
      formattedSolution[i].push(formattedLine);  
    }
  }
  return formattedSolution;
};

console.log(solveNQueens(4));
// [ [ '.Q..', '...Q', 'Q...', '..Q.' ],
//   [ '..Q.', 'Q...', '...Q', '.Q..' ] ]
