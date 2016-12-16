/**
 * @param {number[]} nums
 * @return {number}
 */
// version 1 
// var jump = function(nums) {
//   // f[i] min number of jumps to reach index i
//   var f = [];
//   f[0] = 0;
//   for(var i = 1; i < nums.length; i++) {
//     f[i] = Number.MAX_SAFE_INTEGER;
//     for(var j = i - 1; j >= 0; j--) {
//       if(nums[j] >= i - j && f[j] + 1 < f[i]) {
//         f[i] = f[j] + 1;
//       }
//     }
//   }
//   return f[nums.length - 1];    
// };

var jump = function(nums) {
  if(nums === null || nums.length === 0) {
    return 0;
  }
  // f[i] min number of jumps to reach index i
  // initialization
  var f = [];
  f[0] = 0;
  var farthest = nums[0];
  for(var i = 1; i <= farthest; i++) {
    f[i] = 1;
  }
  var i = 1;
  while(farthest <= nums.length - 1 && i < nums.length) {
    if(nums[i] + i > farthest) {
      var prevFarthest = farthest;
      farthest = nums[i] + i;
      for(var j = prevFarthest + 1; j <= farthest; j++) {
        // all numbers in the reachable range can be updated
        f[j] = f[i] + 1;
      }
    }
    i++;
  }
  return f[nums.length - 1];    
};
var A = [2,3,1,1,4];
console.log(jump(A)); // 2