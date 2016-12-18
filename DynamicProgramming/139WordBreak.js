/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
// Version 1: recursion 
// var wordBreak = function(s, wordDict) {
//     for(var i = 0; i < s.length; i++) {
//       if(wordDict.has(s.substring(0, i + 1)) && i === s.length - 1) {
//         return true;
//       } else if(wordDict.has(s.substring(0, i + 1)) && wordBreak(s.substring(i + 1, s.length), wordDict)) {
//         return true;
//       }
//     }
//     return false;
// };

// Version 2: DP
var wordBreak = function(s, wordDict) {
  if(s.length === 0) {
    return true;
  }
  // L[i]: if the first i characters in s can be segmented
  // L[i] = OR(L[j]&&s[j, i - 1]) in dict, where j = 0, ..., i - 1
  // the range of j can be optimized. The length of the word s[j, i - 1] should be
  // >= min length of the word in dictionary and <= max length in the dictionary
  var L = [true];
  for(var i = 1; i <= s.length; i++) {
    L[i] = false;
    for(var j = 0; j < i; j++) {
      if(L[j] && wordDict.has(s.substring(j, i))) {
        L[i] = true;
        break;
      }
    }
  }  
  return L[s.length];
};
var s = 'leetcode';
var dict = new Set(["leet", "code"]);
console.log(wordBreak(s, dict));

