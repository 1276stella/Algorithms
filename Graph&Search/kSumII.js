var kSumII = function(A, k, target) {
  var results = [];
  dfs(A, 0, k, target, [], results);
  return results;
};

var dfs = function(A, start, k, target, result, results) {
  if(k === 0 && target === 0) {
    results.push(result.slice());
    return;
  }
  for(var i = start; i < A.length; i++) {
    result.push(A[i]);
    dfs(A, i + 1, k - 1, target - A[i], result, results);
    result.pop();
  }
};

var A= [1,2,3,4];
console.log(kSumII(A, 2, 5)); //[ [ 1, 4 ], [ 2, 3 ] ]