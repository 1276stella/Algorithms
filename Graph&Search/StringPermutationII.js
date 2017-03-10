// Given a string, find all permutations of it without duplicates.
// Example
// Given “abb”, return [“abb”, “bab”, “bba”].
// Given “aabb”, return [“aabb”, “abab”, “baba”, “bbaa”, “abba”, “baab”].

var stringPermutation2 = function(str) {
  str = str.split('').sort().join('');
  var visited = {}, results = [];
  dfs(str, '', visited, results);
  return results;
};

var dfs = function(str, temp, visited, results) {
  if(temp.length === str.length) {
    results.push(temp);
    return;
  }
  var lastInd = -1;
  for(var i = 0; i < str.length; i++) {
    if(visited[i] || str[i] === str[lastInd]) {
      continue;
    }
    visited[i] = true;
    dfs(str, temp + str[i], visited, results);
    visited[i] = false;
    lastInd = i;
  }
};
console.log(stringPermutation2('abb'));
console.log(stringPermutation2('aabb'));