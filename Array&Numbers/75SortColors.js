/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// use three pointers 
// var sortColors = function(nums) {
//   var i = 0, stored1 = 0, stored2 = nums.length - 1;
//   while(i <= stored2) {
//     if(nums[i] === 0) {
//       swap(nums, i, stored1);
//       i++;
//       stored1++;
//     } else if(nums[i] === 1) {
//       i++;
//     } else{
//       swap(nums, i, stored2);
//       stored2--;
//     }
//   }    
// };

// var swap = function(nums, i, j) {
//   var temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// };

// version 2
var sortColors = function(nums) {
  var counts = [];
  var k = 3;
  for(var i = 0; i < k; i++) {
    counts[i] = 0;
  }
  nums.forEach(function(num) {
    counts[num]++;
  });
  i = 0;
  counts.forEach(function(count, index) {
    while(count > 0) {
      nums[i] = index;
      i++;
      count--;
    }
  });
};
var nums = [0,1,0,2,1];
sortColors(nums);
console.log(nums);

// var nums = [1,0];
// sortColors(nums);
// console.log(nums);