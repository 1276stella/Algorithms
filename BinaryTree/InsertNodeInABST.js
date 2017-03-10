/*
  Given a binary search tree and a new tree node, insert the node into the tree. 
  You should keep the tree still be a valid binary search tree.
*/

var insertNode = function (root, node) {
  if(root === null) {
    return node;
  }
  var curt = root;
  var inserted = false;
  while(!inserted) {
    if(node.val < curt.val) {
      if(curt.left === null) {
        curt.left = node;
        inserted = true;
      } else {
        curt = curt.left;
      }
    } else {
       if(curt.right === null) {
        curt.right = node;
        inserted = true;
      } else {
        curt = curt.right;
      }     
    }
  }
  return root;
}