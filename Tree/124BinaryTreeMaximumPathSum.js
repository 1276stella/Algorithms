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

// Version 1: Seperate the two cases

// var maxPathThroughRoot = function(root) {
//   var path1 = singleMaxPathFromRoot(root.left);
//   var path2 = singleMaxPathFromRoot(root.right);

//   return path1 + path2 + root.val;
// };

/**
 * maximum path sum from root to any node in the tree.
 * it does not have to take any node if the path sum is less than 0.
 * @return {Number} maximum single path sum or 0
 */
// var singleMaxPathFromRoot = function(root) {
//   if(root === null) {
//     return 0;
//   }
//   var path1 = singleMaxPathFromRoot(root.left);
//   var path2 = singleMaxPathFromRoot(root.right);
//   return Math.max(path1 + root.val, path2 + root.val, 0);
// };

// var maxPathSum = function(root) {
//     if(root === null) {
//       return Number.MIN_SAFE_INTEGER;
//     }

//     var path1 = maxPathThroughRoot(root);
//     var path2 = maxPathSum(root.left);
//     var path3 = maxPathSum(root.right);

//     return Math.max(path1, path2, path3);
// };

// Version 2: calculate the two cases in at one time
var maxPathSumUtil = function(root) {
  if(root === null) {
    return [0, Number.MIN_SAFE_INTEGER];
  }
  var singlePath1, singlePath2, maxPath1, maxPath2, singlePath, maxPath;
   [singlePath1, maxPath1] = maxPathSumUtil(root.left);
   [singlePath2, maxPath2] = maxPathSumUtil(root.right);

  var maxPathThroughRoot = singlePath1 + singlePath2 + root.val;
  maxPath = Math.max(maxPathThroughRoot, maxPath1, maxPath2);
  singlePath = Math.max(singlePath1 + root.val, singlePath2 + root.val, 0);

  return [singlePath, maxPath];
};

var maxPathSum = function(root) {
  var singlePath, maxPath;
  [singlePath, maxPath] = maxPathSumUtil(root);
  return maxPath;
}

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
