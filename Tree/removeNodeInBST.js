/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} remove the node
 * @return {TreeNode} the root of the binary search tree after removal
 */
 // replace the subtree rooted at node u with the subtree rooted at node v
 // See CLRS page296
var transplant = function(root, u, v) {
  if(root === u) {
    root = v;
  }
  if(u === u.p.left) {
    u.p.left = v;
  } else {
    u.p.right = v;
  }
  if(v !== null) {
    v.p = u.p;
  }
};

var treeMininum = function(root) {
  var x = root;
  while(x.left !== null) {
    x = x.left;
  }
  return x;
};
var treeDelete = function(root, z) {
  if(z.left === null && z.right === null) {
    transplant(root, z, null);
  } else if(z.right === null) {
    transplant(root, z, z.left);
  } else {  
    var y = treeMininum(z.right);
    // console.log('y', y)
    if(y.p === z) {
      transplant(root, z, y);
      y.left = z.left;
      z.left.p = y;
    } else {
      transplant(root, y, y.right);
      transplant(root, z, y);
      y.left = z.left;
      z.left.p = y;
      y.right = z.right;
      z.right.p = y;    
    }
  }
  z.p = z.left = z.right = null;
};

var TreeNode = function(val) {
  this.val = val;
  this.p = this.left = this.right = null;
};
var node1 = new TreeNode(5);
var node2 = new TreeNode(3); 
var node3 = new TreeNode(6);
var node4 = new TreeNode(2); 
var node5 = new TreeNode(4); 

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node2.p = node1;
node3.p = node1;
node4.p = node2;
node5.p = node2;

treeDelete(node1, node2)
console.log(node1);
