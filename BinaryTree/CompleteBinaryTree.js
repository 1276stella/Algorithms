/*
Check if two binary trees are identical. Identical means the two binary trees have the same structure and every identical position has the same value.
*/

var isComplete = function(root) {
  if(root === null) {
    return true;
  }
  var queue = [];
  queue.push(root);
  var hasChild = true;
  while(queue.length > 0) {
    var l = queue.length;
    var result = [];
    for(var i = 0; i < l; i++) {
      var node = queue.shift();
      if(!hasChild) {
        if(node.left !== null || node.right !== null) {
          return false;
        }
      } else {
        if(node.left === null || node.right === null) {
          hasChild = false;
        }
        if(!hasChild && node.right !== null) {
          return false;
        }
      }

      if(node.left !== null) {
        queue.push(node.left);
      }
      if(node.right !== null) {
        queue.push(node.right);
      }
    }
  }  
  return true;
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
/*
    1 
   / \         
  2   2   
 /     \           
4       4              
*/
var node1 = new TreeNode(1);
var node2 = new TreeNode(2); 
var node3 = new TreeNode(2);
var node4 = new TreeNode(4); 
var node5 = new TreeNode(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
// node3.right = node5;
console.log(isComplete(node1)); // true