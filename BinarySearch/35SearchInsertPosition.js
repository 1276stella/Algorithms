/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {  
  var start = 0, end = nums.length - 1;
  if(target > nums[end]) {
    return end + 1;
  }
  if(target < nums[start]) {
    return 0;
  }  
  
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(target < nums[mid]) {
      end = mid;
    } else if(target > nums[mid]) {
      start = mid;
    } else {
      return mid;
    }
  }    

  if(target > nums[start] && target <= nums[end]) {
    return end;
  } 
  if(target === nums[start]) {
    return start;
  }
};

//[1,3,5,6], 5 → 2
var nums = [1,3,5,6];
console.log(searchInsert(nums, 5)); // 2
console.log(searchInsert(nums, 2)); // 1
console.log(searchInsert(nums, 7)); // 4
console.log(searchInsert(nums, 0)); // 0
