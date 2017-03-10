/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNegative = false;
  if(x < 0) {
    x = -x;
    isNegative = true;
  }
  var res = 0;
  while(x > 0) {
    res = x % 10 + res * 10;
    x = Math.floor(x / 10);
  }
  var MAX_NUMBER = Math.pow(2, 31);
  if(!isNegative && res > MAX_NUMBER - 1 || isNegative && res > MAX_NUMBER) {
    return 0;
  }
  return isNegative ? -res : res;
};

// console.log(reverse(123));
console.log(reverse(-12));
