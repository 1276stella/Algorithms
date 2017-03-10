/**
 * @param nums: A list of integers
 * @return: A list of integers includes the index of the first number 
 *          and the index of the last number
 */
// calculate sum of subarray sum[0, 1], sum[0, 2], ... sum[0, i], ... sum[0, j]
// Note, sum[i, j] is the sum of the array elements from index i to index j.
// if any sum occurs twice, e.g. sum[0, i] and sum[0, j] have the same
// sum, then sum[i + 1, j] must equal 0
var subarraySum = function(nums) {
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
};

var nums = [-3, 1, 2, -3, 4];
console.log(subarraySum(nums));