/**
 * @param nums: a list of integers
 * @return: A integer indicate the sum of minimum subarray
 */
// version 1
var minSubArray = function(nums) {
  if(nums.length === 0) {
    return null;
  }
  var sum = [];
  sum[0] = nums[0];
  for(var i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i]; 
  }
  var start = sum[0], minDiff = Number.MAX_SAFE_INTEGER;
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] < start) {
      var diff = nums[i] - start;
      if(diff < minDiff) {
        minDiff = diff;
      }
    } else {
      start = nums[i];
    }
  }  
  return minDiff;
}; 

// version 2: if the sum of a subarray is greater than 0, then it does not have any contribution to the min subarray
var minSubArray = function(nums) {
  var sum = 0, minSum = Number.MAX_SAFE_INTEGER;
  nums.forEach(function(num) {
    sum += num;
    if(sum < minSum) {
      minSum = sum;
    }
    if(sum > 0) {
      sum = 0;
    }
  });
  return minSum;
};
var nums = [1,-1,-2,1];
console.log(minSubArray(nums));