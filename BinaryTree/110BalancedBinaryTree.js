/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// version 1: based on definition of a balanced tree
// redundant recursion exists 
var isBalanced_v1 = function(root) {
  if(root === null) {
    return true;
  }
  return Math.abs(height(root.left) - height(root.right)) <= 1 
  && isBalanced(root.left)
  && isBalanced(root.right);
};

var height = function(root) {
  if(root === null) {
    return 0;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
};

// version 2
var isBalanced = function(root) {
  return maxDepth(root) !== -1;
};
/**
 * @param {TreeNode} root
 * @return {number} if the tree is balanced, it returns height of the tree; otherwise, it returns -1.
 */
var maxDepth = function(root) {
  if(root === null) {
    return 0;
  }
  var left, right;
  left = maxDepth(root.left);
  right = maxDepth(root.right);
  if(left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};