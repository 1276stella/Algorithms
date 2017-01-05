// http://www.lintcode.com/en/problem/backpack/#
/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 */
var backpack = function(m, A) {
  // f[i][j]: 前i个物品恰好放入容量为j的背包里获得的最大物品容量
  var f = [[]];
  for(var j = 0; j <= m; j++) {
    f[0][j] = 0;
  }
  for(var i = 1; i <= A.length; i++) {
    f[i] = [];
    for(var j = 0; j <= m; j++) {
      f[i][j] = f[i - 1][j];
      if(j >= A[i - 1]) {
        f[i][j] = Math.max(f[i][j], f[i - 1][j - A[i - 1]] + A[i - 1]);
      }
    }
  }

  var maxSize = 0;
  for(var j = 1; j <= m; j++) {
    if(f[A.length][j] > maxSize) {
      maxSize = f[A.length][j];
    }
  }
  return maxSize;
};

var A = [2,3,5,7];
console.log(backpack(11, A)); // 10
console.log(backpack(12, A)); // 12
