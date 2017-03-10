/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/**
 * Version 1: O(n*logn)
 */
// var islargerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree = function(root) {
//     var mostRightNodeInLeftSubtree, mostRightNodeInRightSubtree, node;
//     node = root.left;
//     while(node !== null && node.right !== null) {
//         node = node.right;
//     }
//     mostRightNodeInLeftSubtree = node;
    
//     node = root.right;
//     while(node !== null && node.left !== null) {
//         node = node.left;
//     }
//     mostLeftNodeInRightSubtree = node;
    
//     var largerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree = true;
//     if(mostRightNodeInLeftSubtree !== null && mostRightNodeInLeftSubtree.val >= root.val || mostLeftNodeInRightSubtree != null && mostLeftNodeInRightSubtree.val <= root.val) {
//         largerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree = false;
//     }
//     return largerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree;
// }; 
// var isValidBST = function(root) {
//     if(root === null) {
//         return true;
//     }

//     var largerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree = islargerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree(root);
//     if(largerThanMostRightInLeftSubtreeLessThanMostLeftInRightSubtree && isValidBST(root.left) && isValidBST(root.right)) {
//         return true;
//     }
//     return false;
// };

/**
 * Version 2
 */
var isValidBSTUtil = function(root, lowBound, highBound) {
    if(root === null) {
        return true;
    }
    if(root.val > lowBound && root.val < highBound) {
        return isValidBSTUtil(root.left, lowBound, root.val) && isValidBSTUtil(root.right, root.val, highBound);
    } else {
        return false;
    }
};
var isValidBST = function(root) {
    return isValidBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
var node1 = new TreeNode(5);
var node2 = new TreeNode(14); 
var node3 = new TreeNode(1);

node1.left = node2;
node2.left = node3;

console.log(isValidBST(node1)); // false
