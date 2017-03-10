// Given a binary tree, find the maximum path sum from root.
// The path may end at any node in the tree and contain at least one node in it.
var maxPathSum = function (root) {
  if(root === null) {
    return 0;
  }
  return Math.max(maxPathSum(root.left), maxPathSum(root.right), 0) + root.val;
}

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

var node1 = new TreeNode(-2);
console.log(maxPathSum(node1)); // -2

//   -2
//   / \
// -5  -3
var node2 = new TreeNode(-5); 
var node3 = new TreeNode(-3);

node1.left = node2;
node1.right = node3;
console.log(maxPathSum(node1)); // -2
