/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  var stack = [];
  for(var i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    if(ch in map) {
      stack.push(ch);
    } else {
      if(map[stack.pop()] !== ch) {
        return false;
      }
    }
  }
  return stack.length === 0;
};