/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  var valueToInorderIndex = createInorderIndexHash(inorder);
  return buildTreeHelper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, valueToInorderIndex);
};

var buildTreeHelper = function(inorder, inStart, inEnd, postorder, postStart, postEnd, indexHash) {
  if(inStart > inEnd) {
    return null;
  }
  var root = new TreeNode(postorder[postEnd]);
  var index = indexHash[postorder[postEnd]];
  root.left = buildTreeHelper(inorder, inStart, index - 1, postorder, postStart, postStart + index - inStart - 1, indexHash);
  root.right = buildTreeHelper(inorder, index + 1, inEnd, postorder, postStart + index - inStart, postEnd - 1, indexHash);
  return root;
};

var createInorderIndexHash = function(inorder) {
  var hash = {};
  for(var i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i;
  }
  return hash;
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

//          A
//        /   \
//      /       \
//     B         C
//    / \        /
//  /     \    /
// D       E  F
var inorder = ['D','B','E','A','F','C'];
var postorder = ['D','E','B','F','C','A'];
console.log(buildTree(inorder, postorder));