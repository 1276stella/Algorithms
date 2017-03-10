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
var pathSum = function(root, sum) {
  var dfs = function(root, currentSum, path) {
    if(root === null) {
      return;
    }
    if(root.left === null && root.right === null) {
      if(currentSum + root.val === sum) {
        path.push(root.val);
        results.push(path.slice());
        path.pop();      
      }
      return;
    }
    path.push(root.val);
    dfs(root.left, currentSum + root.val, path);
    dfs(root.right, currentSum + root.val, path);
    path.pop();
  }

  if(root === null) {
    return [];
  }
  var results = [];
  dfs(root, 0, []);
  return results;
};