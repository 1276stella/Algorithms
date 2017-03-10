/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// version 1 
// var buildTree_v1 = function(preorder, inorder) {
//   if(preorder.length === 0) {
//     return null;  
//   }    
//   /* hash = {
//       val: {
//         node: node
//         inorderIndex: index
//       }
//     }
//   */
//   var hash = createInorderHash(inorder);
//   for(var i = 1; i < preorder.length; i++) {
//     var node = hash[preorder[i]].node;
//     var index = hash[preorder[i]].inorderIndex;

//     var curtNode = hash[preorder[0]].node;
//     var inserted = false;
//     while(!inserted) {
//       var curtInd = hash[curtNode.val].inorderIndex;
//       if(index < curtInd) {
//         if(curtNode.left === null) {
//           curtNode.left = node;
//           inserted = true;
//         } else {
//           curtNode = curtNode.left;
//         }
//       } else {
//         if(curtNode.right === null) {
//           curtNode.right = node;
//           inserted = true;
//         } else {
//           curtNode = curtNode.right;
//         }      
//       }
//     }
//   }
//   return hash[preorder[0]].node;
// };

// var createInorderHash = function(inorder) {
//   var hash = {};
//   for(var i = 0; i < inorder.length; i++) {
//     var node = new TreeNode(inorder[i]);
//     hash[inorder[i]] = {
//       node: node,
//       inorderIndex: i
//     };
//   }
//   return hash;
// };

// version 2
var buildTree = function(preorder, inorder) {
  var valueToInorderIndex = createInorderIndexHash(inorder);
  return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, preorder.length - 1, valueToInorderIndex);
};

var buildTreeHelper = function(preorder, preStart, preEnd, inorder, inStart, inEnd, indexHash) {
  if(preStart > preEnd) {
    return null;
  }
  var root = new TreeNode(preorder[preStart]);
  var index = indexHash[preorder[preStart]];
  root.left = buildTreeHelper(preorder, preStart + 1, preStart + index - inStart, inorder, inStart, index - 1, indexHash);
  root.right = buildTreeHelper(preorder, preStart + index - inStart + 1, preEnd, inorder, index + 1, inEnd, indexHash);
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

var preorder = [4,3,1,2,7,8,9];
var inorder = [1,2,3,4,8,7,9];
console.log(buildTree(preorder, inorder));