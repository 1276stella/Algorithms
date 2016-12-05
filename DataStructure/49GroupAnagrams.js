/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var strHashMap = {};
  strs.forEach(function(str) {
    var sortedStr = str.split('').sort().join('');
    // sort each string
    if(sortedStr in strHashMap) {
      strHashMap[sortedStr].push(str);
    } else {
      strHashMap[sortedStr] = [str];
    }
  });

  var result = [];
  for(var group in strHashMap) {
    result.push(strHashMap[group]);
  }

  return result;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

var strs = ["",""];
console.log(groupAnagrams(strs));
