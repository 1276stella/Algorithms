/**
 * @param A, B: Two strings.
 * @return: The length of longest common subsequence of A and B.
 */
var longestCommonSubsequence = function(A, B) {
  // lcs[i][j]: length of the longest common subsequence in the first i chars of A
  // and the first j chars of B
  var lcs = [];
  for(var i = 0; i <= A.length; i++) {
    lcs[i] = [0]; 
  }
  for(var j = 0; j <= B.length; j++) {
    lcs[0][j] = 0; 
  }
  for(var i = 1; i <= A.length; i++) {
    for(var j = 1; j <= B.length; j++) {
      if(A.charAt(i - 1) === B.charAt(j - 1)) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    } 
  }    
  return lcs[A.length][B.length];
}

console.log(longestCommonSubsequence('ABCD', 'EDCA')); // 1
console.log(longestCommonSubsequence('ABCD', 'EACB')); // 2
