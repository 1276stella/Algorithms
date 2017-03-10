/**
 * @param nums: A list of integers
 * @return: An integer denotes the sum of max two non-overlapping subarrays
 */
// http://www.lintcode.com/en/problem/maximum-subarray-ii/

var maxTwoSubArrays = function(nums) {
  var tempMaxSum = 0, maxSum = Number.MIN_SAFE_INTEGER;
  var maxSumFromLeft = [];
  for(var i = 0; i < nums.length; i++) {
    tempMaxSum += nums[i];
    maxSum = maxSum > tempMaxSum ? maxSum : tempMaxSum;
    maxSumFromLeft[i] = maxSum;

    if(tempMaxSum < 0) {
      tempMaxSum = 0;
    } 
  }

  tempMaxSum = 0;
  maxSum = Number.MIN_SAFE_INTEGER;
  var maxSumFromRight = [];
  for(var i = nums.length - 1; i >= 0; i--) {
    tempMaxSum += nums[i];
    maxSum = maxSum > tempMaxSum ? maxSum : tempMaxSum;
    maxSumFromRight[i] = maxSum;

    if(tempMaxSum < 0) {
      tempMaxSum = 0;
    }   
  } 
  console.log(maxSumFromLeft);
  // console.log(maxSumFromRight);

  var maxSum = Number.MIN_SAFE_INTEGER;
  for(var i = 0; i < nums.length - 1; i++) {
    sum = maxSumFromLeft[i] + maxSumFromRight[i + 1];
    if(maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
};
var nums = [1, 3, -1, 2, -1, 2];
console.log(maxTwoSubArrays(nums)); // [ 1, 4, 4, 5, 5, 6 ], 7

var nums = [-1,-2,-3,-100,-1,-50];
console.log(maxTwoSubArrays(nums)); // -2