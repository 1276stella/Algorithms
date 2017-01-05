// http://www.lintcode.com/en/problem/backpack-ii/
/**
 * @param m: An integer m denotes the size of a backpack
 * @param A & V: Given n items with size A[i] and value V[i]
 * @return: The maximum value
 */
var backpackII = function(m, A, V) {
  // f[i][j]: 前i个物品恰好放入容量为j的背包里获得的最大物品价值
  var f = [[]];
  for(var j = 0; j <= m; j++) {
    f[0][j] = 0;
  }
  for(var i = 1; i <= A.length; i++) {
    f[i] = [];
    for(var j = 0; j <= m; j++) {
      f[i][j] = f[i - 1][j];
      if(j >= A[i - 1]) {
        f[i][j] = Math.max(f[i][j], f[i - 1][j - A[i - 1]] + V[i - 1]);
      }
    }
  }

  var maxValue = 0;
  for(var j = 1; j <= m; j++) {
    if(f[A.length][j] > maxValue) {
      maxValue = f[A.length][j];
    }
  }
  return maxValue;  
};
var A = [2,3,5,7];
var V = [1,5,2,4];
console.log(backpackII(10, A, V)); // 9