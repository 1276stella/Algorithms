/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var sum = 0, maxSum = Number.MIN_SAFE_INTEGER;
  nums.forEach(function(num){
    sum += num;
    if(sum > maxSum) {
      maxSum = sum;
    }
    if(sum < 0) {
      sum = 0;
    }
  })
  return maxSum;
};
var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
var nums = [-1];
console.log(maxSubArray(nums));