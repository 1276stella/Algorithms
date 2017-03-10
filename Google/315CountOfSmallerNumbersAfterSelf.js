/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  var l = nums.length;
  if(l === 0) {
    return [];
  }
  var increamentalStack = [], closestSmallerIndex = [];
  increamentalStack.push(l);
  nums[l] = Number.MIN_SAFE_INTEGER; 

  for(var i = l - 1; i >= 0; i--) {
    while(nums[increamentalStack[increamentalStack.length - 1]] >= nums[i]) {
      increamentalStack.pop();
    }
    closestSmallerIndex[i] = increamentalStack[increamentalStack.length - 1];
    increamentalStack.push(i);
  }

  var result = [];
  result[l] = -1;
  for(var i = l - 1; i >= 0; i--) {
    result[i] = result[closestSmallerIndex[i]] + 1;
  }

  nums.pop();
  result.pop();
  return result;
};

var nums = [5,3,5,6,7,2,1,8,0];
console.log(countSmaller(nums))