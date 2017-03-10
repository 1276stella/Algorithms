/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  var result = [];
  dfs('', 0, result, word);
  return result;
};

var dfs = function(str, index, result, word) {
  if(index === word.length) {
    result.push(str);
    return;
  }
  dfs(str + word.charAt(index), index + 1, result, word);
  if(index === 0 || isNaN(str.charAt(str.length - 1))) {
    for(var k = 1; k <= word.length - index; k++) {
      dfs(str + k, index + k, result, word);
    }
  }
};

console.log(generateAbbreviations('word'));