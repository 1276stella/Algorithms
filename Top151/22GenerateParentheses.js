/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  traverse('', n, 0, result);
  return result;
};
var traverse = function(str, n, leftParentheseNumber, result) {
  if(str.length === 2*n) {
    result.push(str);
    return;
  }
  if(leftParentheseNumber < n) {
    traverse(str + '(', n, leftParentheseNumber + 1, result);
  }
  var rightParentheseNumber = str.length - leftParentheseNumber;
  if(rightParentheseNumber < n && leftParentheseNumber > rightParentheseNumber) {
    traverse(str + ')', n, leftParentheseNumber, result);
  }
};

// version 2: find all permutations and check if the the permutation is valid
// var generateParenthesis = function(n) {
//   var result = [];
//   traverse('', n, result);
//   return result;
// };
// var traverse = function(str, n, result) {
//   if(str.length === 2*n) {
//     if(isValid(str)) {
//       result.push(str);
//     }
//     return;
//   }
//   traverse(str + '(', n, result);
//   traverse(str + ')', n, result);
// };

// var isValid = function(s) {
//   var map = {
//     '(' : ')',
//     '{' : '}',
//     '[' : ']'
//   };
//   var stack = [];
//   for(var i = 0; i < s.length; i++) {
//     var ch = s.charAt(i);
//     if(ch in map) {
//       stack.push(ch);
//     } else {
//       if(map[stack.pop()] !== ch) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };
console.log(generateParenthesis(3));