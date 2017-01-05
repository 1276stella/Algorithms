/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var f = [];
  f[0] = [true];
  for(var j = 1; j <= p.length; j++) {
    f[0][j] = f[0][j - 1] && p.charAt(j - 1) === '*';
  }
  for(var i = 1; i <= s.length; i++) {
    f[i] = [false];
  }  
  for(var i = 1; i <= s.length; i++) {
    for(var j = 1; j <= p.length; j++) {
      f[i][j] = f[i - 1][j -1] && 
                      (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '*' || p.charAt(j - 1) === '?')
              || f[i][j -1] && p.charAt(j - 1) === '*'
              || f[i - 1][j] && p.charAt(j - 1) === '*';  

    }
  }  
  return f[s.length][p.length];
};

console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'aa')); // true
console.log(isMatch('aaa', 'a')); // false
console.log(isMatch('aa', '*')); // true
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '?*')); // true
console.log(isMatch('aab', 'c*a*b')); // false

