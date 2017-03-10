/**
 * @param {number[]} height
 * @return {number}
 */
// version 1: O(n * maxHeight), where n is length of the height and maxHeight is the max height in 
// height 
// var trap = function(height) {
//   var maxHeight = 0;
//   for(var i = 0; i < height.length; i++) {
//     maxHeight = Math.max(maxHeight, height[i]);
//   }
//   var count = 0;
//   for(var h = 1; h <= maxHeight; h++) {
//     var tempCount = 0, hasWall = false;
//     for(var i = 0; i < height.length; i++) {
//       if(height[i] >= h) {
//         if( hasWall) {
//           count += tempCount;
//         }
//         tempCount = 0;
//         hasWall = true;
//       } else {
//         tempCount++;
//       }
//     }
//   }
//   return count;
// };
// version 2: O(n)
var trap = function(height) {
  var l = height.length;
  if(l === 0) {
    return 0;
  }
  var maxIndexOnLeft = [-1], maxInd = 0;
  for(var i = 1; i < l; i++) {
    if(height[maxInd] <= height[i]) {
      maxIndexOnLeft[i] = -1;
      maxInd = i;
    } else {
      maxIndexOnLeft[i] = maxInd;
    }
  }
  var maxIndexOnRight = [], maxInd = l - 1;
  maxIndexOnRight[l - 1] = -1;
  for(var i = l - 2; i >= 0; i--) {
    if(height[maxInd] <= height[i]) {
      maxIndexOnRight[i] = -1;
      maxInd = i;
    } else {
      maxIndexOnRight[i] = maxInd;
    }
  }  

  var count = 0;
  for(var i = 0; i < l; i++) {
    if(maxIndexOnLeft[i] !== -1 && maxIndexOnRight[i] !== -1) {
      count += Math.min(height[maxIndexOnLeft[i]], height[maxIndexOnRight[i]]) - height[i];
    }
  }
  return count;
};
var height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));

var height = [2,1,0,2];
console.log(trap(height));