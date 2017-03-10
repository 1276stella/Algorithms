/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
// building a string by array join is said to be faster than
// string concatenation 
var licenseKeyFormatting = function(S, K) {
  var count = 1, res = [];
  for(var i = S.length - 1; i >= 0; i--) {
    if(S.charAt(i) === '-') {
      continue;
    }
    res.push(S.charAt(i).toUpperCase());
    if(count % K === 0 && i !== 0) {
      res.push('-');
    }
    count++;
  }
  i = res.length - 1;
  while(res[i] === '-') {
    res.pop();
    i--;
  }
  return res.reverse().join('');
}; 
// var licenseKeyFormatting = function(S, K) {
//   var count = 1, res = '';
//   for(var i = S.length - 1; i >= 0; i--) {
//     if(S.charAt(i) === '-') {
//       continue;
//     }
//     res = S.charAt(i).toUpperCase() + res;
//     if(count % K === 0 && i !== 0) {
//       res = '-' + res;
//     }
//     count++;
//   }
//   i = 0;
//   while(res.charAt(i) === '-') {
//     i++;
//   }
//   return res.substring(i);
// };
var S = "2-4A0r7-4k", K = 4;
console.log(licenseKeyFormatting(S, K)); //"24A0-R74K"

var S = "2-4A0r7-4k", K = 3;
console.log(licenseKeyFormatting(S, K)); //"24-A0R-74K"

var S = "--a-a-a-a--", K = 2;
console.log(licenseKeyFormatting(S, K)); //"AA-AA"

