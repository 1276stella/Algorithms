/**
 * @param {number[]} colors
 * @param {number} k
 * @return {void} Do not return anything, modify colors in-place instead.
 * see problem description at http://www.lintcode.com/en/problem/sort-colors-ii/
 */
// version 1 
// Time complex can be estimated ~O(n*k) (we can get this by assuming each number evenly occurs) 
// var sortColors2 = function(colors, k) {
//   var count = 1, start = 0, end = colors.length - 1;
//   while(count < k) {
//     start = sortColors(colors, start, end, count);
//     count += 2;
//   }
// }; 
// var sortColors = function(nums, start, end, k) {
//   var i = start, stored1 = start, stored2 = end;
//   while(i <= stored2) {
//     if(nums[i] === k) {
//       swap(nums, i, stored1);
//       i++;
//       stored1++;
//     } else if(nums[i] === k + 1) {
//       i++;
//     } else{
//       swap(nums, i, stored2);
//       stored2--;
//     }
//   } 
//   return i;
// };

// var swap = function(nums, i, j) {
//   var temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// };

// version 2: counting sort
var sortColors2 = function(colors, k) {
  var counts = [];
  for(var i = 0; i < k; i++) {
    counts[i] = 0;
  }
  colors.forEach(function(color) {
    counts[color - 1]++;
  });
  counts.forEach(function(count, index) {
    while(count > 0) {
      colors[i] = index + 1;
      i++;
      count--;
    }
    console.log(i)
  });
};
var nums = [3,2,2,1,4];
sortColors2(nums, 4);
console.log(nums);

// var nums = [2,1];
// sortColors2(nums, 3);
// console.log(nums);