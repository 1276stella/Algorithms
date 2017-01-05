/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if(s.length === 0 || +s.substring(0 , 1) === 0) {
    return 0;
  }
  var f = [1, 1];
  for(var i = 2; i <= s.length; i++) {
    if(+s.charAt(i - 1) === 0) {
      if(+s.charAt(i - 2) === 0 || +s.charAt(i - 2) >= 3) {
        f[i] = 0;
      } else {
        f[i] = f[i - 2];
      }
    } else if(+s.charAt(i - 2) === 0) {
      f[i] = f[i - 1];
    } else if(+s.substring(i - 2, i) <= 26) {
      f[i] = f[i - 1] + f[i - 2];
    } else {
      f[i] = f[i - 1];
    }
  }
  return f[s.length];
};
console.log(numDecodings('0')); // 0
console.log(numDecodings('12')); // 2
console.log(numDecodings('10')); // 1
console.log(numDecodings('100')); // 0
console.log(numDecodings('130')); // 0
console.log(numDecodings('123')); // 3
console.log(numDecodings('101')); // 1

