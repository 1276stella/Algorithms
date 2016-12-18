/**
 * @param {string} s
 * @return {number}
 */
// var isPalindrome = function(s) {
//   var i = 0, j = s.length - 1;
//   while(i <= j) {
//     if(s.charAt(i) !== s.charAt(j)) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// } 
// var minCut = function(s) {
//     if(s.length === 0) {
//       return 0;
//     }
//     // Let minCut[i] be the min cut needed for the first i characters in s
//     var minCut = [-1];
//     for(var i = 1; i <= s.length; i++) {
//       minCut[i] = Number.MAX_SAFE_INTEGER;
//       for(var j = i - 1; j >= 0; j--) {
//         if(isPalindrome(s.substring(j, i))) {
//           minCut[i] = Math.min(minCut[i], minCut[j] + 1);
//         }
//       }
//     }
//     return minCut[s.length];
// };

console.log(minCut('aab')); // 1
console.log(minCut('')); // 0
console.log(minCut('aaa')); // 0

