// Given a binary tree, find all paths that sum of the nodes in the path equals to a given number target.
// A valid path is from root node to any of the leaf nodes.
var binaryTreePathSum = function (root, target) {
  var result = [];
  dfs(root, target, [], 0, result);
  return result;
};
var dfs = function(root, target, path, sum, result) {
  if(root === null) {
    return;
  }
  if(root.left === null && root.right === null) {
    if(sum + root.val === target) {
      path.push(root.val);
      result.push(path.slice());
      path.pop();
    }
    return;
  }  
  path.push(root.val);
  dfs(root.left, target, path, sum + root.val, result);
  dfs(root.right, target, path, sum + root.val, result);
  path.pop();
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
 //     1
 //    / \
 //   2   4
 //  / \
 // 2   3
var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(4);
var node4 = new TreeNode(2); 
var node5 = new TreeNode(3); 

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(binaryTreePathSum(node1, 5));
// [
//   [1, 2, 2],
//   [1, 4]
// ]