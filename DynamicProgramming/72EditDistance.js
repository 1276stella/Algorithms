/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // f[i][j] is the min distance required to convert the first i characters in word1
  // to the first j characters in word2
  var f = [];
  for(var i = 0; i <= word1.length; i++) {
    f.push([]);
    f[i][0] = i;
  }
  for(var j = 0; j <= word2.length; j++) {
    f[0][j] = j;
  }  
  for(var i = 1; i <= word1.length; i++) {
    for(var j = 1; j <= word2.length; j++) {
      f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + 1;
      if(word1.charAt(i - 1) === word2.charAt(j - 1)) {
        f[i][j] = Math.min(f[i][j], f[i - 1][j - 1]);
      } else {
        f[i][j] = Math.min(f[i][j], f[i - 1][j - 1] + 1);
      }
    }
  }
  return f[word1.length][word2.length];
};

// console.log(minDistance('word', 'war')); // 2
console.log(minDistance('a', 'b')); // 1
