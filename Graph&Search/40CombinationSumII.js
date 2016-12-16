/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Typical example of backtracking 
var combinationSum2 = function(candidates, target) {
  var traverse = function(candidates, target, sum, index, path, results) {
    if(sum === target) {
      results.push(path.slice());
      return;
    }
    if(sum > target) {
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
        traverse(candidates, target, sum, i + 1, path, results);
        path.pop();
        sum = sum - candidates[i];
      }
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

var candidates = [10, 1, 2, 7, 6, 1, 5];
console.log(combinationSum2(candidates, 8));
// expected:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]