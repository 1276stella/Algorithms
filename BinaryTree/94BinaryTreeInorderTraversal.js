var inorderTraversal = function(root) {
  var stack = [], result = [];
  var node = root;
  while(stack.length > 0 || node !== null) {
    while(node !== null) {
        stack.push(node);
        node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }  
  return result;
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

console.log(inorderTraversal(node1)); //[ 3, 4, 5, 7, 6 ]