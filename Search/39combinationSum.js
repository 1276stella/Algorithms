/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Typical example of backstracking 
var combinationSum = function(candidates, target) {
  var traverse = function(candidates, target, sum, index, path, results) {
    if(sum === target) {
      results.push(path.slice());
      return;
    }
    if(sum > target) {
      return;
    }
    for(var i = index; i < candidates.length; i++) {
      sum = sum + candidates[i];
      if(sum > target) {
        break;
      }
      path.push(candidates[i]);
      traverse(candidates, target, sum, i, path, results);
      path.pop();
      sum = sum - candidates[i];
    }
  }

  var results = [];
  var sum = 0;
  var index = 0;
    candidates.sort(function(a, b) {
      return a - b;
    });
  traverse(candidates, target, sum, index, [], results);
  return results;
};