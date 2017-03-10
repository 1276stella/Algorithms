/*
  Check two given binary trees are identical or not. Assuming any number of tweaks are allowed. 
  A tweak is defined as a swap of the children of one node in the tree.
  Example
      1             1
     / \           / \
    2   3   and   3   2
   /                   \
  4                     4
  are identical.
      1             1
     / \           / \
    2   3   and   3   4
   /                   \
  4                     2
  are not identical.
  Note
  There is no two nodes with the same value in the tree.
*/

var isTweakedIdentical = function(a, b) {
  if(a === null && b === null) {
    return true;
  }
  if(a === null || b === null) {
    return false;
  }
  if(a.val !== b.val) {
    return false;
  }
  return  isTweakedIdentical(a.left, b.left) && isTweakedIdentical(a.right, b.right)|| 
  isTweakedIdentical(a.left, b.right) && isTweakedIdentical(a.right, b.left);
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(3);
var node4 = new TreeNode(4); 

node1.left = node2;
node1.right = node3;
node2.left = node4;

var node5 = new TreeNode(1);
var node6 = new TreeNode(3); 
var node7 = new TreeNode(2);
var node8 = new TreeNode(4); 

node5.left = node6;
node5.right = node7;
node7.right = node8;
console.log(isTweakedIdentical(node1, node5)); // true