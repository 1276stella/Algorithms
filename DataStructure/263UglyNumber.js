/**
 * @param {number} num
 * @return {boolean}
 */
// time complexity O(logN) 
var isUgly = function(num) {
  if(num <= 0) {
    return false;
  }     
  while(num % 2 === 0) {
    num = num / 2;
  } 
  while(num % 3 === 0) {
    num = num / 3;
  } 
  while(num % 5 === 0) {
    num = num / 5;
  }      
  return num === 1;
};

console.log(isUgly(6)); // true
console.log(isUgly(8)); // true
console.log(isUgly(7)); // false