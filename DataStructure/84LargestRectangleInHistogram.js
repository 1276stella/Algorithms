/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * This problem can be solved by 
 * 1. iterating through heights using startIndex and endIndex
 * 2. find out the minimum value between heights[startIndex] and heights[endIndex], 
 *    calculate the area of each pair of startIndex and endIndex
 * 3. find the largest area
 * However, this would take O(n^2), where n is the length of the array heights
 * Is there any better solution?
 * For this kind of problem with an array as input, we can think: can we do this in O(n)?
 * For each element in the array, if we can find the indices of the closest smaller element 
 * on its left side and its right side, then the largest area for this element is the gap between
 * the two indices times the height of the element.
 * The way to find the closest smaller element on one side is to use an incremental stack.
 */
// var largestRectangleArea = function(heights) {
//   if(heights.length === 0) {
//     return 0;
//   }
//   if(heights.length === 1) {
//     return heights[0];
//   }
//   var closetSmallerElementOnLeft = [];
//   var closetSmallerElementOnRight = [];

//   var incrementalStack = [];
//   incrementalStack.push([-1, Number.MIN_SAFE_INTEGER]); // [position, hight]
//   for(var i = 0; i < heights.length; i++) {
//     var topElement = incrementalStack[incrementalStack.length - 1];
//     while(heights[i] <= topElement[1]) {
//       incrementalStack.pop();
//       topElement = incrementalStack[incrementalStack.length - 1]
//     }
//     incrementalStack.push([i, heights[i]]);
//     closetSmallerElementOnLeft.push(topElement[0]);
//   }

//   incrementalStack = [];
//   var maxArea = 0;
//   incrementalStack.push([heights.length, Number.MIN_SAFE_INTEGER]); // [position, hight]
//   for(var i = heights.length - 1; i >= 0; i--) {
//     var topElement = incrementalStack[incrementalStack.length - 1];
//     while(heights[i] <= topElement[1]) {
//       incrementalStack.pop();
//       topElement = incrementalStack[incrementalStack.length - 1]
//     }
//     incrementalStack.push([i, heights[i]]);
//     closetSmallerElementOnRight[i] = topElement[0];
//     var area = (closetSmallerElementOnRight[i] - closetSmallerElementOnLeft[i] - 1) * heights[i];
//     if(area > maxArea) {
//       maxArea = area;
//     }    
//   }  
//   console.log(closetSmallerElementOnLeft);
//   console.log(closetSmallerElementOnRight);

//   return maxArea;
// };

var largestRectangleArea = function(heights) {
  if(heights === null ||  heights.length === 0) {
    return 0;
  }

  var stack = new Stack();
  var max = 0;
  for(var i = 0; i <= heights.length; i++) {
    var curt = (i === heights.length) ? -1 : heights[i];
    while(!stack.empty() && curt <= heights[stack.peek()]) {
      var h = heights[stack.pop()];
      var w = stack.empty() ? i : i - stack.peek() - 1;
      max = Math.max(max, h * w);
      console.log(i, h, w)
    }
    stack.push(i);
  }

  return max;
};

/**
 * Simulate a stack using an object
 */
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(obj){
  this.storage[this.stackSize] = obj;
  this.stackSize++;
}

Stack.prototype.pop = function(){
  if(this.stackSize<=0){
    return null;
  }
  var result = this.storage[this.stackSize-1];
  this.stackSize--;
  return result;
}

Stack.prototype.peek = function(){
  if(this.stackSize<=0){
    return null;
  }
  return this.storage[this.stackSize-1];
}

Stack.prototype.size = function(){
  return this.stackSize;
}

Stack.prototype.empty = function(){
  return this.stackSize === 0;
}
var heights = [2,1,5,6,2,3];
console.log(largestRectangleArea(heights)); //10
heights = [1,1];
// console.log(largestRectangleArea(heights)); //2
heights = [0];
// console.log(largestRectangleArea(heights)); //0