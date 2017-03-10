/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var helper = function(node, path, results) {
        if(node === null) {
          return;
        }
        if(node.left === null && node.right === null) {
          results.push(path + node.val);
          return;
        }        
        helper(node.left, path + node.val + '->', results);
        helper(node.right, path + node.val + '->', results);
    }
    var results = [];
    helper(root, '', results);
    return results;  
};