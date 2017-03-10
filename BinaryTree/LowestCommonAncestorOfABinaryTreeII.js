/**
 * Definition for a binary tree node with parent node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.parent = this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// https://yisuang1186.gitbooks.io/-shuatibiji/lowest_common_ancestor_ii.html 
// dfs version 
var lowestCommonAncestorII = function(root, p, q) {
  var pathP = findPath(root, p);
  var pathQ = findPath(root, q);
  var i = pathP.length - 1, j = pathQ.length - 1;
  var lowestCommonAncestor = null;
  while(i >=0 && j >= 0) {
    if(pathP[i] !== pathQ[j]) {
      break;
    }
    lowestCommonAncestor = pathP[i];
    i--;
    j--;
  }
  return lowestCommonAncestor;
};
var findPath = function(root, p) {
  var path = [];
  while(p !== null) {
    path.push(p);
    p = p.parent;
  }
  return path;
};

var TreeNode = function(val) {
  this.val = val;
  this.parent = this.left = this.right = null;
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

node2.parent = node1;
node3.parent = node1;
node4.parent = node3;
node5.parent = node3;

console.log(lowestCommonAncestorII(node1, node2, node4).val); //1
console.log(lowestCommonAncestorII(node1, node4, node5).val); //3