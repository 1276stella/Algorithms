/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  var dfs = function(root) {
    if(found && successor || root === null) {
      return;
    }
    dfs(root.left);
    if(found && successor === null) {
      successor = root;
    }    
    if(root === p) {
      found = true;
    }
    dfs(root.right);
  };
  var found = false, successor = null;
  dfs(root, p);
  return successor;
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

//   4
//  / \
// 3   7
//    / \
//   5   6
var node1 = new TreeNode(4);
var node2 = new TreeNode(3); 
var node3 = new TreeNode(7);
var node4 = new TreeNode(5); 
var node5 = new TreeNode(6); 

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(inorderSuccessor(node1, node4)); //7