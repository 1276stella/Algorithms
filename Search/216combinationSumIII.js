/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var traverse = function(candidates, k, target, sum, index, path, results) {
    if(sum === target) {
      if(path.length === k) {
         results.push(path.slice());
       }
      return;
    }
    if(sum > target || path.length >= k) {
      return;
    }
    var used = {};
    for(var i = index; i < candidates.length; i++) {
      if(!used[candidates[i]]) {
        used[candidates[i]] = true;
        sum = sum + candidates[i];
        if(sum > target) {
          break;
        }
        path.push(candidates[i]);
        traverse(candidates, k, target, sum, i + 1, path, results);
        path.pop();
        sum = sum - candidates[i];
      }
    }
  }
  
  if(n < 1 || n > 55) {
    return [];
  }

  var candidates = [];
  for(var i = 1; i <= 9; i++) {
    candidates.push(i);
  }
  var results = [];
  var sum = 0;
  var index = 0;
  traverse(candidates, k, n, sum, index, [], results);
  return results;
};

console.log(combinationSum3(3, 7)); // [[1,2,4]]