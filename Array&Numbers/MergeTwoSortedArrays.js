/**
 * @param A and B: sorted integer array A and B.
 * @return: A new sorted integer array
 */
var mergeTwoSortedArray = function(A, B) {
  var i = 0, j = 0;
  var C = [];
  while(i < A.length && j < B.length) {
    if(A[i] < B[j]) {
      C.push(A[i]);
      i++;
    } else {
      C.push(B[j]);
      j++;
    }
  }
  while(i < A.length) {
    C.push(A[i]);
    i++;
  }
  while(j < B.length) {
    C.push(B[j]);
    j++;
  }  
  return C;
}; 

var A = [1,2,3,4];
var B = [2,4,5,6];
console.log(mergeTwoSortedArray(A, B)); //[1,2,2,3,4,4,5,6]