/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  //f[x][y] is the unique paths from start (0, 0) to position (x, y)
  //initilization f[0][y] = 0, f[x][0] = 0
  if(obstacleGrid.length === 0) {
    return 0;
  }
  var m = obstacleGrid.length, n = obstacleGrid[0].length;
  var f = [];
  var hasPath = 1;
  for(var x = 0; x < m; x++) {
    if(obstacleGrid[x][0] === 1) {
      hasPath = 0;
    } 
    f[x] = [hasPath];
  }
  hasPath = 1;
  for(var y = 0; y < n; y++) {
    if(obstacleGrid[0][y] === 1) {
      hasPath = 0;
    } 
    f[0][y] = hasPath;
  }

  for(x = 1; x < m; x++) {
    for(y = 1; y < n; y++) {
      if(obstacleGrid[x][y] === 1) {
        f[x][y] = 0;
      } else {
        f[x][y] = f[x - 1][y] + f[x][y - 1];
      }
    }
  }

  return f[m - 1][n - 1];    
};