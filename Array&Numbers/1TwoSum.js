/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var hash = {};
  for(var i = 0; i < nums.length; i++) {
    var num = target - nums[i];
    if(num in hash) {
      return [hash[num], i];
    }
    hash[nums[i]] = i;
  }
};
var nums = [2,7,11,15];
console.log(twoSum(nums, 9));