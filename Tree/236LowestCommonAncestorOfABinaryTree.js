/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/** 
 * findPath version1: recursion
 * find the path from root to node
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {array} a path containing nodes from node to root [node, ..., root]
 */
//  var findPath = function(root, node) {
//   if(root === null) {
//     return [];
//   }
//   if(root === node) {
//     return [node];
//   }
//   if(root.left !== null) {
//     var path = findPath(root.left, node);
//     if(path[0] === node) {
//       path.push(root);
//       return path;
//     }
//   }

//   if(root.right !== null) {
//     var path = findPath(root.right, node);
//     if(path[0] === node) {
//       path.push(root);
//       return path;
//     }
//   }

//   return [];
// };

// var findLowestCommonAncestor = function(path1, path2) {
//   for(var i = 0; i < path1.length; i++) {
//     if(path2.indexOf(path1[i]) !== -1) {
//       return path1[i].val;
//     }
//   }
// };

/** 
 * findPath version2: recursion using DFS
 * find the path from root to node
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {array} a path containing nodes from root to node [root, ..., node]
 */
var findPath = function(root, node) {
  /** 
   * findPath version2: recursion using DFS
   * traverse the tree and add nodes into path
   * @param {TreeNode} node
   * @param {TreeNode} target
   * @param {array} path
   * @return {boolean} if target is found in the path or not
   */
  var traverse = function(node, target, path) {
    path.push(node);
    if(node === target) {
      return true;
    }
    if (node.left !== null) {
      var found = traverse(node.left, target, path);
      if(found) {
        return true;
      }
    }
    if (node.right !== null) {
      var found = traverse(node.right, target, path);
      if(found) {
        return true;
      }
    }
    path.pop(node);
    return false;
  }

  var path = [];
  traverse(root, node, path);
  return path;
};

var findLowestCommonAncestor = function(path1, path2) {
  for(var i = path1.length - 1; i >= 0; i--) {
    if(path2.indexOf(path1[i]) !== -1) {
      return path1[i].val;
    }
  }
};

var lowestCommonAncestor = function(root, p, q) {

  var pathToP = findPath(root, p);
  var pathToQ = findPath(root, q);

  return findLowestCommonAncestor(pathToP, pathToQ);
};

var printVal = function(p) {
  p.forEach(function(node) {
    console.log(node.val);
  });
}

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
var node1 = new TreeNode(4);
var node2 = new TreeNode(3); 
var node3 = new TreeNode(7);
var node4 = new TreeNode(5); 
var node5 = new TreeNode(6); 

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

// console.log(lowestCommonAncestor(node1, node2, node4)); //4
console.log(lowestCommonAncestor(node1, node4, node5)); //7