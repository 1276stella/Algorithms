/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var result = n & 1;
  for(var i = 1; i < 32; i++) {
    console.log('result',Number(result).toString(2));
    n >>>= 1;
    result <<= 1;
    result += n & 1;
  }
  console.log('result',Number(result).toString(2));
  return Math.abs(result);
};
console.log(Number(4294967295).toString(2))
console.log(reverseBits(4294967295));

