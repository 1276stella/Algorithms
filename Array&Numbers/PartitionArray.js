/** 
 *@param nums: The integer array you should partition
 *@param k: As description
 *return: The index after partition
 */
var partitionArray = function(nums, k) {
  var i = 0, stored = 0;
  while(i < nums.length) {
    if(nums[i] < k) {
      var temp = nums[i];
      nums[i] = nums[stored];
      nums[stored] = temp;
      stored++;
    }
    i++;
  }
  console.log(nums);
  return stored;
};

var nums = [3,2,2,1];
console.log(partitionArray(nums, 2)); // 1
var nums = [3,4,21,7,0,-5];
console.log(partitionArray(nums, 2)); // 2
var nums = [1];
console.log(partitionArray(nums, 2)); // 1