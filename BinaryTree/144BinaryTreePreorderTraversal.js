/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // recursion version
// var preorderTraversal = function(root) {
    
//     var traverseHelper = function(node, result) {
//         if(node === null) {
//             return;
//         }
        
//         result.push(node.val);
//         traverseHelper(node.left, result);
//         traverseHelper(node.right, result);
//     }
//     var result = [];
//     traverseHelper(root, result);
//     return result;
// };

// interative version
// this version in fact simulates the stack in recursion
// var preorderTraversal = function(root) {
//     var result = [];
//     if(root === null) {
//         return result;
//     }
//     var stack = [];
//     var node = root;
//     result.push(node.val);
//     stack.push(node);
//     node.visited = true;
    
//     while(stack.length !== 0) {
//         if(node.left !== null && node.left.visited !== true) {
//             node = node.left;
//             result.push(node.val);
//             stack.push(node);
//             node.visited = true;
//         } else {
//             var temp = stack.pop();
//             if(temp.right !== null) {
//                 node = temp.right;
//                 result.push(node.val);
//                 stack.push(node);
//                 node.visited = true;
//             }
//         }
//     }
//     return result;
// };

// iterative version 2
var preorderTraversal = function(root) {
  if(root === null) {
    return [];
  }
  var stack = [], result = [];
  stack.push(root);
  while(stack.length > 0) {
    var node = stack.pop();
    result.push(node.val);
    if(node.right !== null) {
        stack.push(node.right);
    }
    if(node.left !== null) {
        stack.push(node.left);
    }    
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

console.log(preorderTraversal(node1)); //[ 4, 3, 7, 5, 6 ]
