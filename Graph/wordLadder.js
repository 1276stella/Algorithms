/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
 
var findNeighbors = function(word, wordListCopy) {
    var neighbors = [];
    var charCodeRange = {
      start: 'a'.charCodeAt(0),
      end: 'z'.charCodeAt(0)
    };
    
    for(var i = 0; i < word.length; i++) {
        for(var cc = charCodeRange.start; cc <= charCodeRange.end; cc++) {
          var letter = String.fromCharCode(cc);
          if(letter !== word.charAt(i)) {
                var newWord = word.substring(0, i) + letter + word.substring(i + 1, word.length);
                if(wordListCopy.has(newWord)) {
                    neighbors.push(newWord);
                    wordListCopy.delete(newWord);
                }
          }
        }        
    }
    
    return neighbors;
}; 
var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord === '') {
        return 0;
    }
    var queue = [];
    queue.push(beginWord);
    var ladderLength = 2;
    
    var wordListCopy = new Set(wordList);
    wordListCopy.add(endWord);
    
    while(queue.length !== 0) {
        var qLength = queue.length;
        for(var i = 0; i < qLength; i++) {
            var midWord = queue.shift();
            var neighbors = findNeighbors(midWord, wordListCopy);
            for(var j = 0; j < neighbors.length; j++) {
                var neighbor = neighbors[j];
                if(neighbor === endWord) {
                    return ladderLength;
                }
                queue.push(neighbor);                
            }
        }
        ladderLength++;
    }
    return 0;
};

var wordList = new Set();
wordList.add('hot');
wordList.add('lot');
wordList.add('dot');
wordList.add('dog');
wordList.add('log');

console.log(ladderLength('hit','cog', wordList));