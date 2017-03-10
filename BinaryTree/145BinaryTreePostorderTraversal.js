// var postorderTraversal = function(root) {
//     var result = [];
//     if(root === null) {
//         return result;
//     }
//     var stack = [];
//     var node = root;
//     stack.push(node);
    
//     // all nodes are pushed into the stack. Only node whose left and right children are null or visited is poped
//     // and pushed to the result 
//     while(stack.length !== 0) {
//         while(node.left !== null && !node.left.visited) {
//             node = node.left;
//             stack.push(node);
//         } 
//         if(node.right !== null && !node.right.visited) {
//             node = node.right;
//             stack.push(node);
//         } else {
//             node = stack.pop();
//             result.push(node.val);
//             node.visited = true;
//             node = stack[stack.length - 1];
//         }

//     }
//     return result;
// };

// version 2
// http://articles.leetcode.com/binary-tree-post-order-traversal/
var postorderTraversal = function(root) {
    if(root === null) {
        return [];
    }
    // use the relative position of prev and current to identify
    // if the node is visited or not.
    var prev = null, current = root;
    var stack = [], result = [];
    stack.push(root);
    while(stack.length > 0) {
        current = stack[stack.length - 1];
        if(prev === null || prev.left === current || prev.right === current) {
            // traverse down the tree
            if(current.left !== null) {
                stack.push(current.left);
            } else if(current.right !== null) {
                stack.push(current.right);
            }
        } else if(current.left === prev) {
            // traverse up the tree from the left child
            if(current.right !== null) {
                stack.push(current.right);
            }
        } else {
            // traverse up the tree from the right child
            result.push(current.val);
            stack.pop();
        }
        prev = current;
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

console.log(postorderTraversal(node1)); //[ 3, 5, 6, 7, 4 ]
