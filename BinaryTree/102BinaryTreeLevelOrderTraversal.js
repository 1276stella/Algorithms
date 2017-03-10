/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(root === null) {
    return [];
  }
  var queue = [], results = [];
  queue.push(root);
  while(queue.length > 0) {
    var l = queue.length;
    var result = []
    for(var i = 0; i < l; i++) {
      var node = queue.shift();
      result.push(node.val);
      if(node.left !== null) {
        queue.push(node.left);
      }
      if(node.right !== null) {
        queue.push(node.right);
      }
    }
    results.push(result);
  }  
  return results;
}; 