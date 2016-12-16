/**
 * @param {number[]} nums
 * @return {boolean}
 */
// version 1: Dynamic programming 
// var canJump = function(nums) {
//   if(nums === null || nums.length === 0) {
//     return false;
//   }
//   // f[i] if you can jump to index i
//   var f = [];
//   f[0] = true;
//   for(var i = 1; i < nums.length; i++) {
//     f[i] = false;
//     for(var j = i - 1; j >= 0; j--) {
//       if(f[j] && nums[j] >= i - j) {
//         f[i] = true;
//         break;
//       }
//     }
//   }
//   return f[nums.length - 1];
// };

// version 2: the farthest index nums[0], nums[1], ... nums[i] can reach
var canJump = function(nums) {
  if(nums === null || nums.length === 0) {
    return false;
  }
  var farthest = nums[0];
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] + i > farthest && i <= farthest) {
      farthest = nums[i] + i;
    }
  }
  return farthest >= nums.length - 1;
};
var A = [2,3,1,1,4];
console.log(canJump(A)); // true
A = [3,2,1,0,4];
console.log(canJump(A)); // false