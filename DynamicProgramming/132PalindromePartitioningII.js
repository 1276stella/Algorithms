/**
 * @param {string} s
 * @return {number}
 */ 
// Version 1: this version precalculats a table T[i][j] to store if s[i, ..., j] 
// is palindrome. But this exceeds the memory limit on Leetcode.
// var getPalindromeTable = function(s) {
//   var l = s.length;
//   var map = [];
//   for(var i = 0; i < l; i++) {
//     map.push([]);
//   }
//   for(var i = 0; i < l; i++) {
//     var startIndex = endIndex = i;
//     var flag = true;
//     while(startIndex >= 0 && endIndex <= l - 1) {
//       if(s[startIndex] === s[endIndex] && flag === true) {
//         map[startIndex][endIndex] = true;
//       } else {
//         map[startIndex][endIndex] = false;
//         flag = false;
//       }  
//       startIndex--;
//       endIndex++;
//     }
//   }
//   for(var i = 0; i < l - 1; i++) {
//     var startIndex = i;
//     var endIndex = i + 1;
//     var flag = true;
//     while(startIndex >= 0 && endIndex <= l - 1) {
//       if(s[startIndex] === s[endIndex] && flag === true) {
//         map[startIndex][endIndex] = true;
//       } else {
//         map[startIndex][endIndex] = false;
//         flag = false;
//       }  
//       startIndex--;
//       endIndex++;
//     }
//   } 
//   return map;
// }; 
// var minCut = function(s) {
//     if(s.length === 0) {
//       return 0;
//     }
//     var isPalindrome = getPalindromeTable(s);
//     // Let minCut[i] be the min cut needed for the first i characters in s
//     var minCut = [-1];
//     for(var i = 1; i <= s.length; i++) {
//       minCut[i] = Number.MAX_SAFE_INTEGER;
//       for(var j = i - 1; j >= 0; j--) {
//         if(isPalindrome[j][i - 1]) {
//           minCut[i] = Math.min(minCut[i], minCut[j] + 1);
//         }
//       }
//     }
//     return minCut[s.length];
// };

// Version 2
// This version follows the solution described in https://discuss.leetcode.com/topic/2840/my-solution-does-not-need-a-table-for-palindrome-is-it-right-it-uses-only-o-n-space
// Takes O(n^2) time complexity and O(n) space complexity
var minCut = function(s) {
  var sl = s.length;
  if(sl === 0) {
    return 0;
  }
  var f = [];
  for(var i = 0; i <= s.length; i++) {
    f[i] = i - 1;
  }
  for(var i = 0; i < s.length; i++) {
    for(var l = 0; i - l >= 0 && i + l < sl && s.charAt(i - l) === s.charAt(i + l); l++) {
      f[i + l + 1] = Math.min(f[i + l + 1], f[i - l] + 1);
    } 
    for(var l = 0; i - l >= 0 && i + l + 1 < sl && s.charAt(i - l) === s.charAt(i + l + 1); l++) {
      f[i + l + 2] = Math.min(f[i + l + 2], f[i - l] + 1);
    } 
  } 
  return f[s.length];
};
console.log(minCut('aab')); // 1
console.log(minCut('')); // 0
console.log(minCut('aaa')); // 0