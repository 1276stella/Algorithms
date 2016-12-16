/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var findStartingPosition = function(nums, target) {
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
var findEndPosition = function(nums, target) {
  var start = 0, end = nums.length - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(target < nums[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }    

  if(target === nums[end]) {
    return end;
  }
  if(target === nums[start]) {
    return start;
  }
  return -1;   
}; 
var searchRange = function(nums, target) {
  var startingPosition = findStartingPosition(nums, target);
  var endPosition = findEndPosition(nums, target);
  return [startingPosition, endPosition];
};

var nums = [5, 7, 7, 8, 8, 10];
console.log(searchRange(nums, 8)); // [3, 4]
console.log(searchRange(nums, 7)); // [1, 2]
var nums = [7, 7, 7, 8, 8, 10];
console.log(searchRange(nums, 7)); // [0, 2]