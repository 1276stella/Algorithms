/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var ROMAN_TO_INT = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };  
  var num = 0;
  if(s.length === 0) {
    return 0;
  }  
  for(var i = 0; i < s.length - 1; i++) {
    if(ROMAN_TO_INT[s.charAt(i)] >= ROMAN_TO_INT[s.charAt(i + 1)]) {
      num += ROMAN_TO_INT[s.charAt(i)];
    } else {
      num -= ROMAN_TO_INT[s.charAt(i)];
    }
  }
  return num + ROMAN_TO_INT[s.charAt(s.length - 1)];
};