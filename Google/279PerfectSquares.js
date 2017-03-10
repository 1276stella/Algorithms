/**
 * @param {number} n
 * @return {number}
 */
var memorize = {}; 
var numSquares = function(n) {
  var n_sqrt = Math.sqrt(n);
  if(Number.isInteger(n_sqrt)) {
    return 1;
  }
  var num = Number.MAX_SAFE_INTEGER;
  for(var i = Math.floor(n_sqrt); i >= 1; i--) {
    var remaining = n - i * i;
    if(memorize[remaining]) {
      num = Math.min(num, 1 + memorize[remaining]);
    } else {
      num = Math.min(num, 1 + numSquares(n - i * i));
    }
  }
  memorize[n] = num;
  return num;
};

console.log(numSquares(12)); // 4+4+4, 3
console.log(numSquares(13)); // 4+9, 2
console.log(numSquares(56)); // 3
