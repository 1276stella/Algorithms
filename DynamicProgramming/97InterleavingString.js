/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */ 
var isInterleave = function(s1, s2, s3) {
  if(s1.length + s2.length !== s3.length) {
    return false;
  }     
  // isInterleave[i][j]: if the first i + j  chars of s3 is formed by interleaving the first i chars of s1 and the first j // chars of s2
  var isInterleave = [];
  isInterleave[0] = [];
  isInterleave[0].push(true);
  for(var i = 1; i <= s1.length; i++) {
    isInterleave[i] = [];
    isInterleave[i][0] = (s1.charAt(i - 1) === s3.charAt(i - 1)) && isInterleave[i - 1][0]; 
  }
  for(var j = 1; j <= s2.length; j++) {
    isInterleave[0][j] = (s2.charAt(j - 1) === s3.charAt(j - 1)) && isInterleave[0][j - 1]; 
  }
  for(var i = 1; i <= s1.length; i++) {
    for(var j = 1; j <= s2.length; j++) {
      if(s1.charAt(i - 1) === s3.charAt(i + j - 1) && isInterleave[i - 1][j]) {
        isInterleave[i][j] = true;
      } else if(s2.charAt(j - 1) === s3.charAt(i + j - 1) && isInterleave[i][j - 1]) {
        isInterleave[i][j] = true;
      } else {
        isInterleave[i][j] = false;
      }
    } 
  }    
  return isInterleave[s1.length][s2.length];
};
var s1 = "aabcc", s2 = "dbbca";
var s3 = 'aadbbcbcac';
console.log(isInterleave(s1, s2, s3)); // true

s3 = 'aadbbbaccc';
console.log(isInterleave(s1, s2, s3)); // false

var s1 = 'db', s2 = 'b';
var s3 = 'cbb';
console.log(isInterleave(s1, s2, s3)); // false

