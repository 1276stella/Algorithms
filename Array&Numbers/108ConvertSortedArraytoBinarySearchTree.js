/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) {
    return null;
  }
  return helper(nums, 0, nums.length - 1);
};

// T(n) = 2T(n/2) + O(1) = O(n)
var helper = function(nums, low, high) {
  if(low > high) {
    return null;
  }
  var mid = Math.floor((low + high) / 2);
  var leftSubtree = helper(nums, low, mid - 1);
  var rightSubtree = helper(nums, mid + 1, high);

  var root = new TreeNode(nums[mid]);
  root.left = leftSubtree;
  root.right = rightSubtree;
  return root;
};