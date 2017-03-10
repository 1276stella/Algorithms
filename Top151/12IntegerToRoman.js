/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var base = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000], 
      symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'], 
      i = base.length - 1;
  var result = [];
  while(num > 0) {
    var q = Math.floor(num / base[i]);
    if(q > 0) {
      while(q > 0) {
        result.push(symbols[i]);
        q--;
      }
      num = num % base[i];
    }
    i--;
  }

  return result.join('');
};

console.log(intToRoman(5)); // V
console.log(intToRoman(59)); // LIX
console.log(intToRoman(84)); // LXXXIV

console.log(intToRoman(40)); // XL

