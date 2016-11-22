/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[][]}
 */
var findNeighbors = function(word, wordList) {
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
                if(wordList.has(newWord)) {
                    neighbors.push(newWord);
                    wordList.delete(newWord);
                }
          }
        }        
    }
    
    return neighbors;
}; 

var bfs = function(beginWord, endWord, wordList, visitedMap, distanceTo) {
    var queue = [];
    queue.push(beginWord);
    visitedMap[beginWord] = true;
    distanceTo[beginWord] = 0;    
    
    while(queue.length !== 0) {
        var qLength = queue.length;
        for(var i = 0; i < qLength; i++) {
            var midWord = queue.shift();
            var neighbors = findNeighbors(midWord, wordList);
            for(var j = 0; j < neighbors.length; j++) {
                var neighbor = neighbors[j];
                if(!visitedMap[neighbor]) {
                    distanceTo[neighbor] = distanceTo[midWord] + 1;  
                    visitedMap[neighbor] = true;
                }  

                if(neighbor === endWord) {
                    return;
                }
                queue.push(neighbor);                
            }
        }
    }
};     
var dfs = function(currentWord, beginWord, results, path, depth, wordList, visitedMap, distanceTo) {
    path.push(currentWord);
    if(currentWord === beginWord) {
        results.push(path.slice().reverse());
        path.pop();
        return;
    }
    
    var neighbors = findNeighbors(currentWord, wordList);
    for(var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];
        if(visitedMap[neighbor] && distanceTo[currentWord] === distanceTo[neighbor] + 1) {
            dfs(neighbor, beginWord, results, path, depth + 1, wordList, visitedMap, distanceTo);
        }
    }
    
    for(var i = 0; i < neighbors.length; i++) {
        neighbor = neighbors[i];
        wordList.add(neighbor);
    }
    path.pop();

}; 
var findLadders = function(beginWord, endWord, wordList) {
    if(beginWord === '') {
        return [];
    }    

    // if a word is visited during BFS
    var visitedMap = {};

    // distance from the word to beginWord
    // distanceTo[beginWord] = 0
    var distanceTo = {};

    var wordListCopy = new Set(wordList);
    wordListCopy.add(beginWord);
    wordListCopy.add(endWord);    
    bfs(beginWord, endWord, wordListCopy, visitedMap, distanceTo);  

    wordListCopy = new Set(wordList);
    wordListCopy.add(beginWord);
    wordListCopy.add(endWord); 
    var results = [];
    var path = [];
    dfs(endWord, beginWord, results, path, 1, wordListCopy, visitedMap, distanceTo);
    
    return results;
};

var wordList = new Set();
wordList.add('hot');
wordList.add('lot');
wordList.add('dot');
wordList.add('dog');
wordList.add('log');

console.log(findLadders('hit','cog', wordList));