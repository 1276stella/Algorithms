// http://www.lintcode.com/en/problem/minimum-adjustment-cost/
/**
 * @param A: An integer array.
 * @param target: An integer.
 */
var minimumAdjustmentCost = function(A, target) {
  // f[i][v]: for the first i items, the minimum adjust cost needed
  // to adjust the ith item to v
  var f = [];
  for(var i = 1; i <= A.length; i++) {
    f[i] = [];
    for(var j = 1; j <= 100; j++) {
      f[i][j] = Number.MAX_SAFE_INTEGER;
    }
  }
  f[0] = [];
  for(var v = 1; v <= 100; v++) {
    f[0][v] = 0;
  }
  for(var i = 1; i <= A.length; i++) {
    for(var j = 1; j <= 100; j++) {
      if(f[i - 1][j] !== Number.MAX_SAFE_INTEGER) {
        for(var v = 1; v <= 100; v++) {
          if(Math.abs(j - v) <= target && f[i][v] > f[i - 1][j] + Math.abs(A[i - 1] - v)) {
            f[i][v] = f[i - 1][j] + Math.abs(A[i - 1] - v);
          }
        }
      }
    }
  }
  var minimumAdjustmentCost = Number.MAX_SAFE_INTEGER;
  for(var v = 1; v <= 100; v++) {
    if(f[A.length][v] < minimumAdjustmentCost) {
      minimumAdjustmentCost = f[A.length][v];
    }
  }
  return minimumAdjustmentCost;
};

var A = [1,4,2,3];
console.log(minimumAdjustmentCost(A, 1)); // 2