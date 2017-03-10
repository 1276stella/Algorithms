/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.n = n;
  this.rows = [];
  this.cols = [];
  for(var i = 0; i < n; i++) {
    this.rows[i] = 0;
    this.cols[i] = 0;
  }
  this.diagonal = 0;
  this.antiDiagonal = 0;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  var val = player === 1 ? 1 : -1;
  this.rows[row] += val;
  this.cols[col] += val;
  if(row === col) {
    this.diagonal += val;
  }
  if(col === -row + n - 1) {
    this.antiDiagonal += val;
  }
  if(Math.abs(this.rows[row]) === this.n || Math.abs(this.cols[col]) === this.n
  || Math.abs(this.diagonal) === this.n || Math.abs(this.antiDiagonal) === this.n) {
    return player;
  }

  return 0; 
};

// Version 2: O(n)
/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.matrix = [];
  this.n = n;
  for(var row = 0; row < n; row++) {
    this.matrix.push([]);
  }
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  this.matrix[row][col] = player;
  var rowWin = true, colWin = true, diagonal1Win = true, diagonal2Win = true;
  for(var c = 0; c < this.n; c++) {
    if(this.matrix[row][c] !== player) {
      rowWin = false;
    }
  }
  if(rowWin === true) {
    return player;
  }

  for(var r = 0; r < this.n; r++) {
    if(this.matrix[r][col] !== player) {
      colWin = false;
    }    
    c = r - row + col;
    if(this.matrix[r][c] !== player) {
      diagonal1Win = false;
    }
    c = - (r - row) + col;
    if(this.matrix[r][c] !== player) {
      diagonal2Win = false;
    }    
  } 

  if((colWin || diagonal1Win || diagonal2Win) === true) {
    return player;
  }

  return 0; 
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = Object.create(TicTacToe).createNew(n)
 * var param_1 = obj.move(row,col,player)
 */