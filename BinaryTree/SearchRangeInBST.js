// http://www.lintcode.com/en/problem/search-range-in-binary-search-tree/
var searchRange = function(root, k1, k2) {
  var result = [];
  helper(root, k1, k2, result);
  return result;
};
var helper = function(root, k1, k2, result) {
  if(root === null) {
    return;
  }
  // optimization
  if(root.val > k1) {
    helper(root.left, k1, k2, result);
  }
  if(root.val >= k1 && root.val <= k2) {
    result.push(root.val);
  }
  if(root.val < k2) {  
    helper(root.right, k1, k2, result);
  }
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

/*
    20 
   / \         
  8   22   
 / \           
4   12              
*/
var node1 = new TreeNode(20);
var node2 = new TreeNode(8); 
var node3 = new TreeNode(22);
var node4 = new TreeNode(4); 
var node5 = new TreeNode(12); 

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(searchRange(node1, 10, 22)); // [ 12, 20, 22 ]