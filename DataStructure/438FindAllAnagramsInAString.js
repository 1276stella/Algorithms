/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Version 1
// var getHashMap = function(s) {
// if(s === '') {
//   return {'' : 1};
// }
//   var hashMap = {};
//   for(var i = 0; i < s.length; i++) {
//     var char = s.charAt(i);
//     if(char in hashMap) {
//       hashMap[char]++;
//     } else {
//       hashMap[char] = 1;
//     }
//   }
//   return hashMap;
// }; 
// var isAnagram = function(hashMap1, hashMap2) {
//   for(var key1 in hashMap1) {
//     if(!(key1 in hashMap2) || hashMap1[key1] !== hashMap2[key1]) {
//       return false;
//     }
//   }
//   for(var key2 in hashMap2) {
//     if(!(key2 in hashMap1) || hashMap1[key2] !== hashMap2[key2]) {
//       return false;
//     }
//   }  
//   return true;
// };
// var findAnagrams = function(s, p) {
//   var result = [];
//   var hashMap_p = getHashMap(p);
//   for(var i = 0; i <= s.length - p.length; i++) {
//     var hashMap_s = getHashMap(s.substring(i, i + p.length));
//     if(isAnagram(hashMap_p, hashMap_s)) {
//       result.push(i);
//     }
//   }    
//   return result;
// };

// Version 2
var getHashMap = function(s) {
  var hashMap = {};
  var hashMapSize = 0;
  for(var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if(char in hashMap) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
      hashMapSize++;
    }
  }
  return [hashMap, hashMapSize];
}; 
var findAnagrams = function(s, p) {
  var result = [];
  var hashMap = getHashMap(p)[0];
  var hashMapSize = getHashMap(p)[1];
  var removeElement = function(char) {
    if(char in hashMap) {
      hashMap[char]--;
      if(hashMap[char] === 0) {
        delete hashMap[char];
        hashMapSize--;
      }
    } else {
      hashMap[char] = -1;
      hashMapSize++;
    }
  };

  var addElement = function(char) {
    if(char in hashMap) {
      hashMap[char]++;
      if(hashMap[char] === 0) {
        delete hashMap[char];
        hashMapSize--;
      } 
    } else {
      hashMap[char] = 1;
      hashMapSize++;
    }     
  };

  for(var i = 0; i < p.length; i++) {
    var char = s.charAt(i);
    removeElement(char);
  }
  if(hashMapSize === 0) {
    result.push(0);
  }

  for(var i = 1; i <= s.length - p.length; i++) {
    var prevChar = s.charAt(i - 1);
    var currentChar = s.charAt(i + p.length - 1);
    addElement(prevChar);
    removeElement(currentChar);
         
    if(hashMapSize === 0) {
      result.push(i);
    }
  }    
  return result;
};
var s = "cbaebabacd";
var p = "abc";
console.log(findAnagrams(s, p)); // [0, 6]

var s = "abab";
var p = "ab";
console.log(findAnagrams(s, p)); //[0, 1, 2]