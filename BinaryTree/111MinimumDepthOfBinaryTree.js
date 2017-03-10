/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(root === null) {
    return 0;
  }    
  if(root.left === null && root.right === null) {
    return 1;
  }
  var depth = Number.MAX_SAFE_INTEGER;
  if(root.left !== null) {
   depth = Math.min(depth, minDepth(root.left) + 1);    
  }
  if(root.right !== null) {
   depth = Math.min(depth, minDepth(root.right) + 1);    
  }  
  return depth;    
};