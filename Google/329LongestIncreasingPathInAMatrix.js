/**
 * @param {number[][]} matrix
 * @return {number}
 */
// version 1
// dp[x][y] is the Longest Increasing Path Length which starts at (x, y)
var longestIncreasingPath = function(matrix) {
  if(matrix.length === 0) {
    return 0;
  }
  var dp = [];
  for(var x = 0; x < matrix.length; x++) {
    dp[x] = [];
  }
  var longestPathLength = 1;
  for(var x = 0; x < matrix.length; x++) {
    for(var y = 0; y < matrix[0].length; y++) {
      dp[x][y] = dfs(x, y, matrix, dp);
      longestPathLength = Math.max(longestPathLength, dp[x][y]);
    }
  }
  return longestPathLength;
};
var dfs = function(x, y, matrix, dp) {
  // m: rows, n: cols
  var m = matrix.length, n = matrix[0].length;
  if(x < 0 && x >= m && y < 0 && y >= n) {
    return 0;
  }
  if(dp[x][y]) {
    return dp[x][y];
  }
  var longestPathLength = 1, tempLength;
  // left
  if(y - 1 >= 0 && matrix[x][y - 1] > matrix[x][y]) {
    tempLength = 1 + dfs(x, y - 1, matrix, dp);
    longestPathLength = Math.max(tempLength, longestPathLength);
  }
  // right
  if(y + 1 < n && matrix[x][y + 1] > matrix[x][y]) {
    tempLength = 1 + dfs(x, y+ 1, matrix, dp);
    longestPathLength = Math.max(tempLength, longestPathLength);

  }    
  // up
  if(x - 1 >= 0 && matrix[x - 1][y] > matrix[x][y]) {
    tempLength = 1 + dfs(x - 1, y, matrix, dp);
    longestPathLength = Math.max(tempLength, longestPathLength);
  } 
  // down
  if(x + 1 < m && matrix[x + 1][y] > matrix[x][y]) {
    tempLength = 1 + dfs(x + 1, y, matrix, dp);
    longestPathLength = Math.max(tempLength, longestPathLength);
  }
  dp[x][y] = longestPathLength;
  return longestPathLength;
};


// version 2 
var longestIncreasingPath_v2 = function(matrix) {
  var dfs = function(path, x, y, visited, matrix) {
    path.push(matrix[x][y]);
    visited[x+','+y] = true;    
    if(path.length > longestPathLength) {
      longestPathLength = path.length;
    }
    // left
    if(withinBoundary(x, y - 1, matrix) && !visited[x+','+(y - 1)] && matrix[x][y - 1] > path[path.length - 1]) {
      dfs(path, x, y - 1, visited, matrix);
    }
    // right
    if(withinBoundary(x, y + 1, matrix) && !visited[x+','+(y + 1)] && matrix[x][y + 1] > path[path.length - 1]) {
      dfs(path, x, y + 1, visited, matrix);
    }
    // up
    if(withinBoundary(x - 1, y, matrix) && !visited[(x - 1)+','+y] && matrix[x - 1][y] > path[path.length - 1]) {
      dfs(path, x - 1, y, visited, matrix);
    }     
    // down
    if(withinBoundary(x + 1, y, matrix) && !visited[(x + 1)+','+y] && matrix[x + 1][y] > path[path.length - 1]) {
      dfs(path, x + 1, y, visited, matrix);
    }
    path.pop();
    visited[x+','+y] = false;
  };
  var withinBoundary = function(x, y, matrix) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
  };

  if(matrix.length === 0) {
    return 0;
  }
  var longestPathLength = 0;
  for(var x = 0; x < matrix.length; x++) {
    for(var y = 0; y < matrix[0].length; y++) {
      var path = [], visited = {};
      dfs(path, x, y, visited, matrix);
    }
  }
  return longestPathLength;
};

var nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
];
console.log(longestIncreasingPath(nums));

var nums = nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
];
console.log(longestIncreasingPath(nums));


