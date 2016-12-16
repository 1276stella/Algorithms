/**
 * @param {string} s
 * @return {string[][]}
 */
// Version 1: solve by recurision 
// var isPalindrome = function(s, i, j) {
//   while(i <= j) {
//     if(s[i] !== s[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// };

// var partition = function(s) {
//   var results = [];
//   if(s.length <= 1) {
//     results.push([s]);
//     return results;
//   }

//   var l = s.length;
//   for(var i = 0; i < l - 1; i++) {
//     var substring = s.substring(0, i + 1);
//     if(isPalindrome(s, 0, i)) {
//       var partitionRightSubstringResult = partition(s.substring(i + 1, l));
//       // console.log('partitionRightSubstringResult', partitionRightSubstringResult);
//       for(var j = 0; j < partitionRightSubstringResult.length; j++) {
//         partitionRightSubstringResult[j].unshift(substring);
//         results.push(partitionRightSubstringResult[j]);
//         // console.log('results',results);
//       }
//     }
//   }
//   if(isPalindrome(s, 0, l - 1)) {
//     results.push([s]);
//   }

//   return results;
// };

// Version 2: solve by recursion and precalculate if all substrings of s is palindrome
// var getPalindromeMap = function(s) {
//   var l = s.length;
//   var map = [];
//   for(var i = 0; i < l; i++) {
//     map.push([]);
//   }
//   for(var i = 0; i < l; i++) {
//     var startIndex = endIndex = i;
//     var flag = true;
//     while(startIndex >= 0 && endIndex <= l - 1) {
//       if(s[startIndex] === s[endIndex] && flag === true) {
//         map[startIndex][endIndex] = true;
//       } else {
//         map[startIndex][endIndex] = false;
//         flag = false;
//       }  
//       startIndex--;
//       endIndex++;
//     }
//   }
//   for(var i = 0; i < l - 1; i++) {
//     var startIndex = i;
//     var endIndex = i + 1;
//     var flag = true;
//     while(startIndex >= 0 && endIndex <= l - 1) {
//       if(s[startIndex] === s[endIndex] && flag === true) {
//         map[startIndex][endIndex] = true;
//       } else {
//         map[startIndex][endIndex] = false;
//         flag = false;
//       }  
//       startIndex--;
//       endIndex++;
//     }
//   } 
//   return map;
// }; 

// /**
//  * return all palindrome partitioning of s.substring(startIndex, endIndex + 1)
//  * @param {string} s
//  * @param {number} startIndex
//  * @param {number} endIndex
//  * @param {boolean[][]} isPalindromeMap   
//  * @return {string[][]} results
//  */
// var partitionHelper = function(s, startIndex, endIndex, isPalindromeMap) {
//   var results = [];
//   var l = endIndex - startIndex + 1;
//   if(l === 1) {
//     results.push([s[startIndex]]);
//     return results;
//   }

//   // console.log('s', s);
//   for(var i = startIndex; i < endIndex; i++) {
//     var substring = s.substring(startIndex, i + 1);
//     if(isPalindromeMap[startIndex][i]) {
//       var partitionRightSubstringResult = partitionHelper(s, i + 1, endIndex, isPalindromeMap);
//       // console.log('partitionRightSubstringResult', partitionRightSubstringResult);
//       for(var j = 0; j < partitionRightSubstringResult.length; j++) {
//         partitionRightSubstringResult[j].unshift(substring);
//         results.push(partitionRightSubstringResult[j]);
//         // console.log('results',results);
//       }
//     }
//   }
//   if(isPalindromeMap[startIndex][endIndex]) {
//     results.push([s.substring(startIndex, endIndex + 1)]);
//   }

//   return results;
// };

// var partition = function(s) {
//   var results = [];
//   if(s.length <= 1) {
//     results.push([s]);
//     return results;
//   }
//   var isPalindromeMap = getPalindromeMap(s);
//   // console.log('isPalindromeMap', isPalindromeMap);
//   return partitionHelper(s, 0, s.length - 1, isPalindromeMap);
// };

// Version 3: DFS
/**
 * @param {string} s
 * @return {string[][]}
 */
var getPalindromeMap = function(s) {
  var l = s.length;
  var map = [];
  for(var i = 0; i < l; i++) {
    map.push([]);
  }
  for(var i = 0; i < l; i++) {
    var startIndex = endIndex = i;
    var flag = true;
    while(startIndex >= 0 && endIndex <= l - 1) {
      if(s[startIndex] === s[endIndex] && flag === true) {
        map[startIndex][endIndex] = true;
      } else {
        map[startIndex][endIndex] = false;
        flag = false;
      }  
      startIndex--;
      endIndex++;
    }
  }
  for(var i = 0; i < l - 1; i++) {
    var startIndex = i;
    var endIndex = i + 1;
    var flag = true;
    while(startIndex >= 0 && endIndex <= l - 1) {
      if(s[startIndex] === s[endIndex] && flag === true) {
        map[startIndex][endIndex] = true;
      } else {
        map[startIndex][endIndex] = false;
        flag = false;
      }  
      startIndex--;
      endIndex++;
    }
  } 
  return map;
}; 

var partitionHelper = function(s, startIndex, isPalindromeMap, path, results) {
  if(startIndex === s.length) {
    results.push(path.slice());
    return;
  }
  for(var i = startIndex; i < s.length; i++) {
    var substring = s.substring(startIndex, i + 1);
    if(!isPalindromeMap[startIndex][i]) {
      continue;
    }
    path.push(substring);
    partitionHelper(s, i + 1, isPalindromeMap, path, results);
    path.pop(substring);
  }  
};

var partition = function(s) {
  var results = [];
  if(s.length <= 1) {
    results.push([s]);
    return results;
  }
  var isPalindromeMap = getPalindromeMap(s);
  partitionHelper(s, 0, isPalindromeMap, [], results);
  return results;
};
var s = 'aab';
var result = partition(s);
console.log(result);