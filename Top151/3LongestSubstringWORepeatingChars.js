/**
 * @param {string} s
 * @return {number}
 */
// O(n) in time and O(n) in space, where n is 
// length of string s 
var lengthOfLongestSubstring = function(s) {
  var hash = {},
      maxLength = 0,
      tempLength = 0,
      startIndex = 0;
  for(var i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    if(ch in hash && hash[ch] >= startIndex) {
      tempLength = i - hash[ch];
      startIndex =  hash[ch] + 1;
    } else {
      tempLength++;
    }
    hash[ch] = i;
    if(tempLength > maxLength) {
      maxLength = tempLength;
    }
  }
  return maxLength;
};

var s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s)); // 3
var s = 'bbbbb';
console.log(lengthOfLongestSubstring(s)); // 1
var s = 'pwwkew';
console.log(lengthOfLongestSubstring(s)); // 3
var s = 'abba';
console.log(lengthOfLongestSubstring(s)); // 2