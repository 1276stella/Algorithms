/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });
  var results = [];
  for(var i = 0; i <= nums.length - 4; i++) {
    if(i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for(var j = i + 1; j <= nums.length - 3; j++) {
      if(j !== i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      var left = j + 1, right = nums.length - 1;
      while(left < right) {
        if(nums[i] + nums[j] + nums[left] + nums[right] === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while(left < right && nums[left] === nums[left - 1]) {
            left++;
          }      
          while(left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if(nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++;
        } else {
          right--;
        }

      }
    }
  }
  return results;    
};

var nums = [1, 0, -1, 0, -2, 2];
console.log(fourSum(nums, 0));