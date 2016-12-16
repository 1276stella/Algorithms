/**
 * @param {string} s
 * @return {number}
 */
// Version 1: use DFS  
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

// var minCutNumber = Number.MAX_SAFE_INTEGER;
// var partitionHelper = function(s, startIndex, isPalindromeMap, path, results) {
//   if(startIndex === s.length) {
//     if(path.length < minCutNumber) {
//       minCutNumber = path.length;
//       results.push(path.slice());
//     }
//     return;
//   }
//   for(var i = startIndex; i < s.length; i++) {
//     var substring = s.substring(startIndex, i + 1);
//     if(path.length >= minCutNumber || !isPalindromeMap[startIndex][i]) {
//       continue;
//     }
//     path.push(substring);
//     partitionHelper(s, i + 1, isPalindromeMap, path, results);
//     path.pop(substring);
//   }  
// };

// var minCut = function(s) {
//   if(s.length <= 1) {
//     return 0;
//   }
//   var isPalindromeMap = getPalindromeMap(s);
//   var results = [];
//   partitionHelper(s, 0, isPalindromeMap, [], results);
  
//   for(var i = 0; i < results.length; i++) {
//       minCutNumber = Math.min(minCutNumber, results[i].length - 1);
//   }
//   return minCutNumber;
// }; 

// Version 2: Dynamic programming
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
var minCut = function(s) {
  var l = s.length;
  if(l <= 1) {
    return 0;
  }

  var f = [];
  f[0] = -1;
  var isPalindromeMap = [];
  for(var i = 0; i < l; i++) {
    isPalindromeMap.push([]);
    isPalindromeMap[i][i] = true;
  }
  for(var i = 0; i < l - 1; i++) {
    isPalindromeMap[i][i + 1] = s[i] === s[i + 1];
  }  
  for(var i = 1; i <= l; i++) {
    f[i] = Number.MAX_SAFE_INTEGER;
    for(var j = 0; j <= i - 1; j++) {
      if((j === i - 1 || j + 1 === i - 1) && isPalindromeMap[j][i - 1] || (j + 1 < i - 1) && isPalindromeMap[j + 1][i - 2] && s[j] === s[i - 1]) {
        f[i] = Math.min(f[i], f[j] + 1);
        isPalindromeMap[j][i - 1] = true;
      } else {
        isPalindromeMap[j][i - 1] = false;
      }      
    }
  }
  return f[l];
}; 

var isPalindrome = function(s, i, j) {
  while(i <= j) {
    if(s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

var minCut = function(s) {
  var l = s.length;
  if(l <= 1) {
    return 0;
  }

  var f = [];
  f[0] = -1;
  var isPalindromeMap = getPalindromeMap(s);
  for(var i = 1; i <= l; i++) {
    f[i] = Number.MAX_SAFE_INTEGER;
    for(var j = i - 1; j >= 0; j--) {
      if(isPalindrome(s, j, i - 1)) {
        f[i] = Math.min(f[i], f[j] + 1);
      }
    }
  }

  return f[l];
};
var s = "aab";
console.log(minCut(s));

var s = "abcccb";
console.log(minCut(s));