/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(grid === null || grid.length === 0) {
    return 0;
  }
  var count = 0;
  var visited = [];
  for(var i = 0; i < grid.length; i++) {
    visited[i] = [];
    for(var j = 0; j < grid[0].length; j++) {
      visited[i][j] = false;
    } 
  }
  var dfs = function(i, j) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return;
    }
    if(grid[i][j] === '1' && !visited[i][j]) {
      visited[i][j] = true;
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
    }
  };  
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '1' && !visited[i][j]) {
        count++;
        dfs(i, j);    
      }
    }
  }
  return count;
};

var grid = ["11110","11010","11000","00000"];
console.log(numIslands(grid));

var grid = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
];
var grid = ["11000","11000","00100","00011"];
console.log(numIslands(grid));