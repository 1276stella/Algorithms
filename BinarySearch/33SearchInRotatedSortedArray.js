/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(nums.length === 0 || nums === null) {
    return null;
  }
  var start = 0, end = nums.length - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(nums[mid] === target) {
      return mid;
    }else if(nums[mid] < nums[end]) {
      if(nums[mid] < target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
    } else {
      if(nums[start] <= target && target < nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }      
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

var nums= [4,5,6,7,0,1,2];
console.log(search(nums, 0)); // 4
var nums= [4,5,6,7,0,1,2];
console.log(search(nums, 4)); // 0
var nums= [4,5,6,7,0,1,2];
console.log(search(nums, 2)); // 6
var nums= [-1];
console.log(search(nums, 0)); // -1
var nums= [-1,2,3,5];
console.log(search(nums, 5)); // 3
var nums= [2,3,5,-1];
console.log(search(nums, -1)); // 3