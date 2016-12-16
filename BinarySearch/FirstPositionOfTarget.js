/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var firstPositionOfTarget = function(nums, target) {  
  if(nums.length === 0) {
    return -1;
  }
  
  var start = 0, end = nums.length - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(target <= nums[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }    

  if(target === nums[start]) {
    return start;
  }
  if(target === nums[end]) {
    return end;
  }  
  return -1;
};

var nums = [1, 2, 3, 3, 4, 5, 10];
console.log(firstPositionOfTarget(nums, 3)); // 2
