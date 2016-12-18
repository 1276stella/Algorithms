/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // Let LIS[i] be the length of LIS at index i such that nums[i] is the
  // last element of the LIS
  // LIS[i] = max(LIS[j]) + 1, where j = 0, ..., i - 1
  var LIS = [];
  var longestL = 0;
  for(var i = 0; i < nums.length; i++) {
    LIS[i] = 1;
    for(var j = 0; j <= i - 1; j++) {
      if(nums[j] < nums[i] && LIS[j] + 1 > LIS[i]) {
        LIS[i] = LIS[j] + 1;
      }
    }
    longestL = Math.max(longestL, LIS[i]);
  }
  return longestL;
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 4