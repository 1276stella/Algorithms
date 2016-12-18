/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// String problem and ask for the number of the distinct subsequency,
// so consider DP.
// Let numDistinct[i][j] be the number of distinct subsequence for given
// substring s[0, ..., i - 1] and t[0, ..., j - 1] (the first i chars in s
// and the first j chars in t).
// if s[i - 1] !== t[j - 1], then the ith char in s has no contribution to
// numDistinct[i][j], so numDistinct[i][j] = numDistinct[i - 1][j]
// if s[i - 1] !== t[j - 1], e.g.
// s = 'rabbbit', i = 5
// t = 'rabbit', j = 4
// the problem in fact is to find all combinations in s which equals t
// then the combinations in s can be divided into 
// 1. those include s[i - 1] (the ith char in s), whose number = numDistinct[i - 1][j - 1]
// 2. those do not include s[i - 1], whose number = numDistinct[i - 1][j]
// This is very similar to C(n, k) = C(n - 1, k - 1) + C(n - 1, k).
var numDistinct = function(s, t) {
  var numDistinct = [];
  for(var i = 0; i <= s.length; i++) {
    numDistinct[i] = [1];
  }  
  for(var j = 1; j <= t.length; j++) {
    numDistinct[0][j] = 0;
  }
  for(var i = 1; i <= s.length; i++) {
    for(var j = 1; j <= t.length; j++) {
      numDistinct[i][j] = numDistinct[i - 1][j];
      if(s.charAt(i - 1) === t.charAt(j - 1)) {
        numDistinct[i][j] += numDistinct[i - 1][j - 1];
      }
    }
  }
  return numDistinct[s.length][t.length];
};
console.log(numDistinct("rabbbit", "rabbit")); // 3
console.log(numDistinct("aacaacca", "ca")); // 5