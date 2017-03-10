/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var f = [];
  f[0] = [true];
  for(var j = 1; j <= p.length; j++) {
    f[0][j] = p[j - 1] === '*' && (f[0][j - 1] || f[0][j - 2]);
  }  
  for(var i = 1; i <= s.length; i++) {
    f[i] = [false];
  }  
  for(var i = 1; i <= s.length; i++) {
    for(var j = 1; j <= p.length; j++) {
             // s: xxxa
             // p: xxa 
      f[i][j] = s[i - 1] === p[j - 1] && f[i - 1][j - 1]
             // s: xxxa
             // p: x. 
             || p[j - 1] === '.' && f[i - 1][j - 1]
             // s: xxxa
             // p: x*              
             // x* can be treated as empty string, or 'x'
             || p[j - 1] === '*' && (f[i][j - 1] || f[i][j - 2])
             // s: xxaa
             // p: xxa*
             || p[j - 1] === '*' && f[i - 1][j] && j > 1 && (s[i - 1] === p[j - 2] || p[j - 2] === '.');  
    }
  }
  // console.log(f)
  return f[s.length][p.length];
};

console.log(isMatch('accc', 'ac*')); // true
console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'aa')); // true
console.log(isMatch('aaa', 'aa')); // false

console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('aaa', '.*')); // true
console.log(isMatch('aa', '.*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('aaa', 'ab*a')); // false

console.log(isMatch('a', '.*..a*')) // false