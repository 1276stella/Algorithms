/**
 * @param nums: A list of integers
 * @return: An integer indicate the value of maximum difference between two
 *          Subarrays
 */
var maxDiffSubArrays = function(nums) {
  var tempMaxSum = 0, maxSum = Number.MIN_SAFE_INTEGER;
  var tempMinSum = 0, minSum = Number.MAX_SAFE_INTEGER;
  var maxSumFromLeft = [], minSumFromLeft = [];
  for(var i = 0; i < nums.length; i++) {
    tempMaxSum += nums[i];
    tempMinSum += nums[i];
    maxSum = maxSum > tempMaxSum ? maxSum : tempMaxSum;
    minSum = minSum < tempMinSum ? minSum : tempMinSum;

    maxSumFromLeft[i] = maxSum;
    minSumFromLeft[i] = minSum;

    if(tempMaxSum < 0) {
      tempMaxSum = 0;
    }
    if(tempMinSum > 0) {
      tempMinSum = 0;
    }    
  }

  tempMaxSum = 0;
  maxSum = Number.MIN_SAFE_INTEGER;
  tempMinSum = 0;
  minSum = Number.MAX_SAFE_INTEGER;
  var maxSumFromRight = [], minSumFromRight = [];
  for(var i = nums.length - 1; i >= 0; i--) {
    tempMaxSum += nums[i];
    tempMinSum += nums[i];
    maxSum = maxSum > tempMaxSum ? maxSum : tempMaxSum;
    minSum = minSum < tempMinSum ? minSum : tempMinSum;

    maxSumFromRight[i] = maxSum;
    minSumFromRight[i] = minSum;

    if(tempMaxSum < 0) {
      tempMaxSum = 0;
    }
    if(tempMinSum > 0) {
      tempMinSum = 0;
    }    
  } 

  var maxDiff = Number.MIN_SAFE_INTEGER;
  for(var i = 0; i < nums.length - 1; i++) {
    maxDiff = Math.max(maxDiff, Math.abs(maxSumFromLeft[i] - minSumFromLeft[i + 1]));
    maxDiff = Math.max(maxDiff, Math.abs(maxSumFromRight[i] - minSumFromRight[i + 1]));
  }   
  return maxDiff;
};

var nums = [1,2,-3,1];
console.log(maxDiffSubArrays(nums)); // 6