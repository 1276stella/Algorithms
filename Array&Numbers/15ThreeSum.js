/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. sort the array nums
// 2. use one pointer to scan and the problem becomes find two numbers whose sum is equal to nums[i] (two sum problem) 
// O(n^2)
var threeSum = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  console.log(nums)
  var results = [];
  for(var i = 0; i <= nums.length - 3; i++) {
    if(i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    var target = -nums[i];
    var left = i + 1, right = nums.length - 1;
    while(left < right) {
      if(nums[left] + nums[right] === target) {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while(nums[left] === nums[left - 1]) {
          left++;
        }      
        while(nums[right] === nums[right + 1]) {
          right--;
        }
      } else if(nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }

    }
  }
  return results;
};

var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));