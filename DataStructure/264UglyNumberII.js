/**
 * @param {number} n
 * @return {number}
 */ 
var nthUglyNumber = function(n) {
  // do not need three arrays. 
  // can be optimized to use one array
  var A1 = [1], A2 = [1], A3 = [1];
  var i = 0, j = 0, k = 0;
  var count = 0;
  while(count < n) {
    var min = Math.min(Math.min(A1[i], A2[j]), A3[k]);
    if(A1[i] === min) i++;
    if(A2[j] === min) j++;
    if(A3[k] === min) k++;
    A1.push(min * 2);
    A2.push(min * 3);
    A3.push(min * 5);
    count++;
  }
  return min;
};
console.log(nthUglyNumber(5));