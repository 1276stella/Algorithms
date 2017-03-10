/**
 * @param nums: A list of integers
 * @return: A list of integers includes the index of the first number 
 *          and the index of the last number
 */
// Similar to subarraySum 
var subarraySumClosest = function(nums) {
  var hash = {};
  var sum = 0;
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(sum === 0) {
      return [0, i];
    }
    if(sum in hash) {
      return [hash[sum] + 1, i];
    }
    hash[sum] = i;
  };

  var sumArray = [];
  for(sum in hash) {
    sumArray.push([sum, hash[sum]]);
  }
  sumArray.sort(function(a, b) {
    return a[0] - b[0];
  });

  var diff, minDiff = Number.MAX_SAFE_INTEGER;
  for(var i = 1; i < sumArray.length; i++) {
    diff = sumArray[i][0] - sumArray[i - 1][0];
    if(diff < minDiff) {
      minDiff = diff;
      result = [sumArray[i - 1][1], sumArray[i][1]];
    }
  };  
  if(result[0] > result[1]) {
    var temp = result[0];
    result[0] = result[1];
    result[1] = temp;
  }
  return [result[0] + 1, result[1]];
};

var nums = [-3, 1, 1, -3, 5];
console.log(subarraySumClosest(nums));