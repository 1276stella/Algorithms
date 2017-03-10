/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var carry = 1;
  for(var i = digits.length - 1; i >= 0 && carry > 0; i--) {
    var sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  if(carry === 1) {
    digits.unshift(1);
  }
  return digits;
}; 
// var plusOne = function(digits) {
//   var number = digits.join('');  
//   if(number >= Number.MAX_SAFE_NUMBER) {
//     return digits;
//   }
//   // does not work becaues split returns an array of strings
//   return (parseInt(number) + 1 + '').split('');
// };

console.log(plusOne([1, 2, 3]));