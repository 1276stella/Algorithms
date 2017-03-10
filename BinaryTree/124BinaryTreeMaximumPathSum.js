/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Version 1: TLE
// var maxPathSum = function(root) {
//   if(root === null) {
//     return Number.MIN_SAFE_INTEGER;
//   }
//   var result = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  
//   result = Math.max(result, 
//     maxPathFromRoot(root.left) + maxPathFromRoot(root.right) + root.val);
//   return result;
// };

// var maxPathFromRoot = function(root) {
//   if(root === null) {
//     return 0;
//   }
//   var result = Math.max(maxPathFromRoot(root.left), maxPathFromRoot(root.right)) + root.val;
//   return Math.max(result, 0);
// };

// Version 2: calculate the two cases in at one time
var maxPathSum = function(root) {
  if(root === null) {
    return 0;
  }
  return maxPathSumUtil(root)[1];
};
// returns both single path and max path
// single path: max path starting from the root. May contain no node
var maxPathSumUtil = function(root) {
  if(root === null) {
    return [0, Number.MIN_SAFE_INTEGER];
  }
  var leftPaths, rightPaths;
  var singlePath, maxPath, singlePath1, maxPath1, singlePath2, maxPath2;
  
  leftPaths = maxPathSumUtil(root.left);
  rightPaths = maxPathSumUtil(root.right);
  
  singlePath1 = leftPaths[0];
  maxPath1 = leftPaths[1];
  singlePath2 = rightPaths[0];
  maxPath2 = rightPaths[1];  
  
  var maxPathThroughRoot = singlePath1 + singlePath2 + root.val;
  maxPath = Math.max(maxPath1, maxPath2, maxPathThroughRoot);
  singlePath = Math.max(singlePath1 + root.val, singlePath2 + root.val, 0);

  return [singlePath, maxPath];
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(3);

node1.left = node2;
node2.left = node3;
var result = maxPathSum(node1);
console.log(result);

