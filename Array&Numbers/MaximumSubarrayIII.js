/**
 * @param nums: A list of integers
 * @param k: An integer denote to find k non-overlapping subarrays
 * @return: An integer denote the sum of max k non-overlapping subarrays
 */
// version 1: dynamic programming
// f[i][j]: max sum of j subarrays from the first i elements in nums
// f[i][j] = max(f[p][j - 1] + max sum of subarray [p + 1, ..., i]) 
// max sum of subarray [p + 1, ..., i]: max sum of subarray from the (p + 1)th element to
// the ith element.
var maxSubArray_v1 = function(nums, k) {
  var maxSumArray = getMaxSumArray(nums);  
  var f =[];
  for(var i = 0; i <= nums.length; i++) {
    f[i] = [0];
  }
  for(var j = 0; j <= k; j++) {
    f[0][j] = 0;
  }
  for(var i = 1; i <= nums.length; i++) {
    for(var j = 1; j <= k; j++) {
      if(i < j) {
        f[i][j] = 0;
        continue;
      }
      var maxSum = Number.MIN_SAFE_INTEGER;
      for(var p = j - 1; p <= i - 1; p++) {
        maxSum = Math.max(maxSum, f[p][j - 1] + maxSumArray[p][i - 1]);
      }
      f[i][j] = maxSum;
    }
  }
  return f[nums.length][k];
};

// version 2: recursion
var maxSubArray_v2 = function(nums, k) {
  var maxSumArray = getMaxSumArray(nums);
  return maxSubArrayHelper(nums, 0, k, maxSumArray);
};
var getMaxSumArray = function(nums) {
  var maxSumArray = [];
  for(var i = 0; i < nums.length; i++) {
    maxSumArray[i] = [];
    var sum = 0, maxSum = Number.MIN_SAFE_INTEGER;
    for(var j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = maxSum > sum ? maxSum : sum;
      maxSumArray[i][j] = maxSum;

      if(sum < 0) {
        sum = 0;
      } 
    }
  }
  return maxSumArray;
};
var maxSubArrayHelper = function(nums, start, k, maxSumArray) {
  if(k === 2) {
    return maxTwoSubArrays(nums, start);
  }
  var l = nums.length;
  var maxKSum = Number.MIN_SAFE_INTEGER;
  for(var i = start; i <= l - k; i++) {
    maxKSum = Math.max(maxKSum, maxSubArrayHelper(nums, i + 1, k - 1) + maxSumArray[start][i]);
  }
  return maxKSum;
};
var maxTwoSubArrays = function(nums, start) {
  var tempMaxSum = 0, maxSum = Number.MIN_SAFE_INTEGER;
  var maxSumFromLeft = [];
  for(var i = start; i < nums.length; i++) {
    tempMaxSum += nums[i];
    maxSum = maxSum > tempMaxSum ? maxSum : tempMaxSum;
    maxSumFromLeft[i] = maxSum;

    if(tempMaxSum < 0) {
      tempMaxSum = 0;
    } 
  }

  tempMaxSum = 0;
  maxSum = Number.MIN_SAFE_INTEGER;
  var maxSumFromRight = [];
  for(var i = nums.length - 1; i >= start; i--) {
    tempMaxSum += nums[i];
    maxSum = maxSum > tempMaxSum ? maxSum : tempMaxSum;
    maxSumFromRight[i] = maxSum;

    if(tempMaxSum < 0) {
      tempMaxSum = 0;
    }   
  } 
  // console.log(maxSumFromLeft);
  // console.log(maxSumFromRight);

  var maxSum = Number.MIN_SAFE_INTEGER;
  for(var i = start; i < nums.length - 1; i++) {
    sum = maxSumFromLeft[i] + maxSumFromRight[i + 1];
    if(maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

var nums = [1, 3, -1, 2, -1, 2];
console.log(maxSubArray_v1(nums, 3));
console.log(maxSubArray_v2(nums, 3));

var nums = [-1,4,-2,3,-2,3];
console.log(maxSubArray_v1(nums, 3));
console.log(maxSubArray_v2(nums, 3));

var nums = [6,-1,6,-1,6,-1];
console.log(maxSubArray_v1(nums, 3));
console.log(maxSubArray_v2(nums, 3));

var nums = [6,-1,6,-1,6,-1,2];
console.log(maxSubArray_v1(nums, 3));
console.log(maxSubArray_v2(nums, 3));

var nums = [1,-1,4,5,8,0,-3];
console.log(maxSubArray_v1(nums, 3));
console.log(maxSubArray_v2(nums, 3));