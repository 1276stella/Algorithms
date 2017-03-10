/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// see the problem description at 
// https://aaronice.gitbooks.io/lintcode/content/high_frequency/2sum_closest.html 
// version 1: sort and then binary search
// O(nlogn)
// var twoSumClosest = function(nums, target) {
//   nums.sort(function(a, b) {
//     return a - b;
//   });
//   var diff = Number.MAX_SAFE_INTEGER;
//   nums.forEach(function(num1, i){
//     var num2 = target - num1;
//     var index = binarySearch(num2, nums, i);
//     if(index < nums.length && i !== index) {
//       var diff1 = Math.abs(num1 + nums[index] - target);
//       if(diff1 < diff) {
//         diff = diff1; 
//       }
//     }
//     if(index > 0 && i !== index - 1) {
//       var diff2 = Math.abs(num1 + nums[index - 1] - target);
//       if(diff2 < diff) {
//         diff = diff2; 
//       }     
//     }    
//   });
//   return diff;
// };
// // search for the insert index of the target
// // search for the target in nums after index i (excluded)
// // nums = [1,3,5,9], i = 0, target = 8
// // return 3
// var binarySearch = function(target, nums, i) {
//   var start = i + 1;
//   var end = nums.length - 1;
//   while(start + 1 < end) {
//     var mid = Math.floor((start + end) / 2);
//     if(nums[mid] < target) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//   }
//   if(nums[start] >= target) {
//     return start;
//   } else if(nums[end] >= target) {
//     return end;
//   } else {
//     return end + 1;
//   }
// };

// version 2
// first sort, then use two pointers
var twoSumClosest = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });
  var i = 0, j = nums.length - 1;
  var minDiff = Number.MAX_SAFE_INTEGER;
  while(i < j) {
    var diff = nums[i] + nums[j] - target;
    if(Math.abs(diff) < minDiff) {
      minDiff = Math.abs(diff);
    }
    if(diff < 0) {
      i++;
    } else if(diff > 0) {
      j--;
    } else {
      return 0;
    }
  }
  return minDiff;
};
var nums = [-1,2,1,-4];
console.log(twoSumClosest(nums, 4)); // 1