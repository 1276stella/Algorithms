/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  var l = nums.length;
  if(l === 0) {
    return;
  }
  nums.sort(function(a, b) {
    return b - a;
  });
  var midInd = Math.floor(l / 2 - 1);
  var newNums = [];
  for(var i = 0; i <= midInd; i++) {
    newNums.push(nums[i + midInd + 1]);
    newNums.push(nums[i]);
  }
  if(l % 2 === 1) {
    newNums.push(nums[l - 1]);
  }
  for(var i = 0; i < l; i++) {
    nums[i] = newNums[i];
  }
};

var nums = [1,3,2,2,3,1];
wiggleSort(nums);
console.log(nums);

var nums = [4,5,5,6];
wiggleSort(nums);
console.log(nums);

var nums = [5,3,1,2,6,7,8,5,5];
wiggleSort(nums);
console.log(nums);