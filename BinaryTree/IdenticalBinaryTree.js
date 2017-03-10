/*
Check if two binary trees are identical. Identical means the two binary trees have the same structure and every identical position has the same value.
*/

var isIdentical = function(a, b) {
  if(a === null && b === null) {
    return true;
  }
  if(a === null || b === null) {
    return false;
  }
  return  a.val === b.val && isIdentical(a.left, b.left) && isIdentical(a.right, b.right);
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
/*
    1             1
   / \           / \
  2   2   and   2   2
 /             /
4             4
*/
var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(2);
var node4 = new TreeNode(4); 

node1.left = node2;
node1.right = node3;
node2.left = node4;

var node5 = new TreeNode(1);
var node6 = new TreeNode(2); 
var node7 = new TreeNode(2);
var node8 = new TreeNode(4); 

node5.left = node6;
node5.right = node7;
node6.left = node8;
console.log(isIdentical(node1, node5)); // true