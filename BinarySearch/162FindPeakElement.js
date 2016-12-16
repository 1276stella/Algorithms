/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if(nums.length === 0 || nums === null) {
    return null;
  }
  var start = 0, end = nums.length - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    
    if(nums[mid] < nums[mid + 1]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if(nums[start] > nums[end]) {
    return start;
  } else {
    return end;
  }
};

var nums = [1,2,3,1];
console.log(findPeakElement(nums)); // 2
var nums = [2,1,0,1,2];
console.log(findPeakElement(nums)); // 0, 4
var nums = [2,1,0,3,5,2];
console.log(findPeakElement(nums)); // 0, 4