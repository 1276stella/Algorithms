/**
 * @param {number[][]} triangle
 * @return {number}
 */
// use O(n) space 
var minimumTotal = function(triangle) {
  var n = triangle.length;
  if(n === 0) {
    return 0;
  }
  //f[x][y] min path sum from top to position (x, y)
  // x: from top to bottom
  // y: from left to right
  var f = [];
  for(var x = 0; x < 2; x++) {
    f.push([]);
    for(var y = 0; y < n; y++) {
      f[x][y] = Number.MAX_SAFE_INTEGER;
    }
  }
  f[0][0] = triangle[0][0];
  f[1][0] = triangle[0][0];

  for(var x = 1; x < n; x++) {
    for(var y = 0; y <= x; y++) {
      f[0][y] = f[1][y];
      var minPathSum = Number.MAX_SAFE_INTEGER;
      if(y - 1 >= 0) {
        minPathSum = Math.min(f[0][y - 1], minPathSum);
      }
      if(x - 1 >= y) {
        minPathSum = Math.min(f[0][y], minPathSum);
      }
      f[1][y] = minPathSum + triangle[x][y];
    }
  }

  return f[1].reduce(function(min, currentValue) {
    return Math.min(min, currentValue);
  }, Number.MAX_SAFE_INTEGER);
};

var triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
];
console.log(triangle);
console.log(minimumTotal(triangle));