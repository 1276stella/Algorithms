/**
 * @param {string[]} words
 * @return {number}
 */
// version 1: bit manipulation 
var maxProduct = function(words) {
  var wordBit = [];
  for(var i = 0; i < words.length; i++) {
    wordBit[i] = 0;
    for(var j = 0; j < words[i].length; j++) {
      wordBit[i] |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
    }
  }

  var result = 0;
  for(var i = 0; i < words.length - 1; i++) {
    for(var j = i + 1; j < words.length; j++) {
      if((wordBit[i] & wordBit[j]) === 0) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }  
  return result;
}; 

var words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
console.log(maxProduct(words)); // 16