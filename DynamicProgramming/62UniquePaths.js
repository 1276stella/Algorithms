/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  //f[x][y] is the unique paths from start (0, 0) to position (x, y)
  //initilization f[0][y] = 0, f[x][0] = 0
  var f = [];
  for(var x = 0; x < m; x++) {
    f[x] = [1];
  }
  for(var y = 0; y < n; y++) {
    f[0][y] = 1;
  }

  for(x = 1; x < m; x++) {
    for(y = 1; y < n; y++) {
      f[x][y] = f[x - 1][y] + f[x][y - 1];
    }
  }

  return f[m - 1][n - 1];
};

uniquePaths(2,2);