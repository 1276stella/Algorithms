/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// v1 
var hasPathSum_v1 = function(root, sum) {
  var dfs = function(root, currentSum) {
    if(flag === true) {
      return;
    }
    currentSum += root.val;
    if(root.left === null && root.right === null) {
      if(currentSum === sum) {
        flag = true;
      }
      return;
    }
    if(root.left !== null) {
      dfs(root.left, currentSum);
    }
    if(root.right !== null) {
      dfs(root.right, currentSum);
    }
  }

  if(root === null) {
    return false;
  }
  var flag = false;
  dfs(root, 0);
  return flag;
};

// v2
var hasPathSum = function(root, sum) {
  if(root === null) {
    return false;
  }
  if(root.left === null && root.right === null) {
    return sum === root.val;
  }
  return hasPathSum(root.left, sum - root.val) 
  || hasPathSum(root.right, sum - root.val);
}