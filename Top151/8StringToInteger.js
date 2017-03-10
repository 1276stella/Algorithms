/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = preProcessing(str);
  if(str === 'Not Valid' || str === '') {
    return 0;
  }
  var isNegative = false;
  var result = 0;
  for(var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if(ch === '+') {
      continue;
    } else if(ch === '-') {
      isNegative = true;
    } else {
      result = result * 10 + (ch - '0');
    }
  }
  var MAX_NUMBER = Math.pow(2, 31);
  if(!isNegative && result > MAX_NUMBER - 1) {
    return MAX_NUMBER - 1;
  }
  if(isNegative && result > MAX_NUMBER) {
    return -MAX_NUMBER;
  }
  return isNegative ? -result : result;
};

var preProcessing = function(str) {
  str = str.trim();
  var startInd = 0, endInd = -1;
  for(var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);

    if(i === 0 && (ch === '+' || ch === '-')) {
      if(i + 1 < str.length && str.charAt(i + 1) >= '0' && str.charAt(i + 1) <= '9') {
        endInd++;
      } else {
        return 'Not Valid';
      }
    } else if(ch >= '0' && ch <= '9') {
      endInd++;
    } else {
      return str.substring(startInd, endInd + 1);
    }
  }
  return str.substring(startInd, endInd + 1);
};

console.log(myAtoi('   +123E')); // 123
console.log(myAtoi('   -123.0')); // -123
console.log(myAtoi('   -2147483647')); // -2147483647
console.log(myAtoi('   -2147483649')); // -2147483648
console.log(myAtoi('   +E')); // 0
console.log(myAtoi('')); // 0
console.log(myAtoi('   +0 123')); // 0

