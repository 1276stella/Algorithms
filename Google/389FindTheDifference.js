/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// bit manipulation
// use x^x = 0, so the difference remains in XOR operation 
var findTheDifference = function(s, t) {
  var n = s.length;
  var c = t.charCodeAt(n);
  for(var i = 0; i < n; i++) {
    c ^= s.charCodeAt(i);
    c ^= t.charCodeAt(i);
  } 
  return String.fromCharCode(c);  
};

var s = 'abcd';
var t = 'abcde';
console.log(findTheDifference(s, t));
