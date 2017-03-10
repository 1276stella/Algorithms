/*
Check if two binary trees are identical. Identical means the two binary trees have the same structure and every identical position has the same value.
*/

var isSymmetric = function(root) {
  if(root === null) {
    return true;
  }
  return  isMirror(root.left, root.right);
};

var isMirror = function(a, b) {
  if(a === null && b === null) {
    return true;
  }
  if(a === null || b === null) {
    return false;
  }
  return  a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
};
var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
/*
    1 
   / \         
  2   2   
 /     \           
4       4              
*/
var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(2);
var node4 = new TreeNode(4); 
var node5 = new TreeNode(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.right = node5;
console.log(isSymmetric(node1, node5)); // true