/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(nums.length === 1) {
    return nums[0];
  }
  var maxProduct = nums[0], minProduct = nums[0];
  var result = nums[0];
  for(var i = 1; i < nums.length; i++) {
    var tempMaxProduct = maxProduct;
    var tempMinProduct = minProduct;
    maxProduct = Math.max(Math.max(tempMaxProduct*nums[i], tempMinProduct*nums[i]), nums[i]);
    minProduct = Math.min(Math.min(tempMaxProduct*nums[i], tempMinProduct*nums[i]), nums[i]);
    if(maxProduct > result) {
      result = maxProduct;
    }
  }
  return result;
};

var nums = [2,3,0,4];
console.log(maxProduct(nums)); // 6

var nums = [0,2];
console.log(maxProduct(nums)); // 2

var nums = [-2];
console.log(maxProduct(nums)); // -2

var nums = [-2,-1];
console.log(maxProduct(nums)); // 2

var nums = [-2,1];
console.log(maxProduct(nums)); // 1

var nums = [3,-1,4];
console.log(maxProduct(nums)); // 4

var nums = [-2,0,-1];
console.log(maxProduct(nums)); // 0