/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(grid.length === 0) {
    return 0;
  }
  var m = grid.length, n = grid[0].length;
  var f = [], sum = 0;
  for(var x = 0; x < m; x++) {
    sum += grid[x][0];
    f[x] = [sum];
  }
  sum = 0;
  for(var y = 0; y < n; y++) {
    sum += grid[0][y];
    f[0][y] = sum;
  }

  for(x = 1; x < m; x++) {
    for(y = 1; y < n; y++) {
      f[x][y] = Math.min(f[x - 1][y], f[x][y - 1]) + grid[x][y];
    }
  }

  return f[m - 1][n - 1];    
};