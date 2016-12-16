/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(nums.length === 0 || nums === null) {
    return null;
  }
  var start = 0, end = nums.length - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      return nums[mid];
    }
    if(nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return Math.min(nums[start], nums[end]);
};

var nums= [4,5,6,7,0,1,2];
console.log(findMin(nums)); // 0
var nums= [-1];
console.log(findMin(nums)); // -1
var nums= [-1,2,3,5];
console.log(findMin(nums)); // -1
var nums= [2,3,5,-1];
console.log(findMin(nums)); // -1