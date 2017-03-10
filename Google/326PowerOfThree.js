/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  //3^33 the largest power of three less than Number.MAX_SAFE_INTEGER 2^53 - 1
  return n > 0 && Math.pow(3, 33) % n === 0;
}; 
var isPowerOfThree = function(n) {
  while(n > 1) {
    if(n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }
  return n === 1;
};