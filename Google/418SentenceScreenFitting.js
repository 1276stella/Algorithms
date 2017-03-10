/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
// version 1 - O(rows * maxLength of the word in sentence) 
// see solution at https://discuss.leetcode.com/topic/62455/21ms-18-lines-java-solution
var wordsTyping = function(sentence, rows, cols) {
  var s = sentence.join('-') + '-';
  var l = s.length, i = 0;
  for(var r = 1; r <= rows; r++) {
    i += cols - 1;
    if(s.charAt((i + 1) % l) === '-') {
        i++;
    } else {
      while(s.charAt(i % l) !== '-' && i > 0) {
        i--;
      }
    }
    i++;
  }
  return Math.floor(i / l);
};
// version 2 - O(rows * cols) Time Limit Exceed in Leetcode 
var wordsTyping = function(sentence, rows, cols) {
  // index for row and column
  var r = 0, c = 0;
  // index for current element in sentence
  var i = 0;
  // total number of words the screen currently fits
  var count = 0;
  while(r < rows) {
    if(sentence[i].length <= cols - c) {
      c += sentence[i].length + 1;
      i++;
      if(i >= sentence.length) {
        i = i % sentence.length;
        count++;
      }
    } else {
      c = 0;
      r++;
    }
  }    
  return count;
};
var sentence = ["hello", "world"];
console.log(wordsTyping(sentence, 2, 8)); // 1

var sentence = ["a", "bcd", "e"];
console.log(wordsTyping(sentence, 3, 6)); // 2

var sentence = ["I", "had", "apple", "pie"];
console.log(wordsTyping(sentence, 4, 5)); // 1

var sentence = ["a"];
console.log(wordsTyping(sentence, 20000, 20000)); // 200000000