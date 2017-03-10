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
// dfs version 
var lowestCommonAncestor = function(root, p, q) {
  var findPaths = function(root, p, q, tempPath, paths) {
    if(found === 2 || root === null) {
      return;
    } 
    tempPath.push(root);
    if(root === p || root === q) {
      paths.push(tempPath.slice());
      found++;
    }
    findPaths(root.left, p, q, tempPath, paths);
    findPaths(root.right, p, q, tempPath, paths);
    tempPath.pop();
  };
  var paths = [], found = 0;
  findPaths(root, p, q, [], paths);

  if(paths.length < 2) {
    return null;
  }
  var i = 0, j = 0;
  var lowestCommonAncestor = null;
  while(i < paths[0].length && j < paths[1].length) {
    if(paths[0][i] !== paths[1][j]) {
      break;
    }
    lowestCommonAncestor = paths[0][i];
    i++;
    j++;
  }
  return lowestCommonAncestor;
};

// divide and conquer version
var lowestCommonAncestor_v2 = function(root, p, q) {
  if(root === null || root === p || root === q) {
    return root;
  }
  var leftLCA = lowestCommonAncestor(root.left, p, q);
  var rightLCA = lowestCommonAncestor(root.right, p, q); 

  // if both p and q are in the same subtree, return LCA
  // if only p or q is in one subtree, return p or q
  // if both of p and q are not the in subtree, return null
  if(leftLCA !== null && rightLCA !== null) {
    return root;
  }  
  if(leftLCA !== null) {
    return leftLCA;
  } 
  if(rightLCA !== null) {
    return rightLCA;
  } 
  return null;
};
var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

/*
    1 
   / \         
  2   3   
     / \           
    4   5              
*/
var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(3);
var node4 = new TreeNode(4); 
var node5 = new TreeNode(5); 

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(lowestCommonAncestor(node1, node2, node4).val); //1
console.log(lowestCommonAncestor(node1, node4, node5).val); //3