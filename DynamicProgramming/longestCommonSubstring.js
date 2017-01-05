/**
 * @param A, B: Two strings.
 * @return: The length of longest common substring of A and B.
 */
var longestCommonSubstring = function(A, B) {
  // lcs[i][j]: length of the longest common substring ending with A[i] and B[j]
  // if A[i] === B[j] lcs[i][j] = lcs[i- 1][j- 1] + 1
  // else lcs[i][j] = 0
  var lcs = [];
  for(var i = 0; i <= A.length; i++) {
    lcs[i] = [0]; 
  }
  for(var j = 0; j <= B.length; j++) {
    lcs[0][j] = 0; 
  }
  var maxL = 0;
  for(var i = 1; i <= A.length; i++) {
    for(var j = 1; j <= B.length; j++) {
      if(A.charAt(i - 1) === B.charAt(j - 1)) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
        if(lcs[i][j] > maxL) {
          maxL = lcs[i][j];
        }
      } else {
        lcs[i][j] = 0;
      }
    } 
  }    
  return maxL;
}

console.log(longestCommonSubstring('ABCD', 'CBCE')); // 2
console.log(longestCommonSubstring('ABCD', 'EACB')); // 1
