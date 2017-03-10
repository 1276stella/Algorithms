/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} remove the node
 * @return {TreeNode} the root of the binary search tree after removal
 */
// version 1
var removeNode = function(root, value) {
  /* results = {
    node: node,
    parent: parent
  }
  */
  // if the removed node is root
  var dummy = new TreeNode(0);
  dummy.left = root;
  var results = findRemovedNode(dummy, root, value);

  if(results === null) {
    return root;
  }
  var node = results.node, parent = results.parent;
  var isLeftChild = parent.left === node;

  if(node.left === null && node.right === null) {
    // if the removed node has no child
    if(isLeftChild) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  } else if(node.left === null) {
    // if the removed node has no left child
     if(isLeftChild) {
      parent.left = node.right;
    } else {
      parent.right = node.right;
    }   
  } else {
    // if the removed node has both left and right children
    results = findLargetNodeInLeftSubtree(node);
    var largetNode = results.largetNode,
        largetNodeParent = results.largetNodeParent;
    node.val = largetNode.val;
    if(node.left === largetNode) {
      // if the largestNode is the left child of the removed node
      largetNodeParent.left = largetNode.left;
    } else {
      largetNodeParent.right = largetNode.left;
    }
  }
  return dummy.left;
};

var findRemovedNode = function(dummy, root, value) {
  var prev = dummy, current = root;
  while(current !== null && current.val !== value) {
    prev = current;
    if(value < current.val) {
      current = current.left;
    } else {
      current = current.right
    }
  }  
  var result;
  if(current === null) {
    result =  null;
  } else {
    result = {
      node: current,
      parent: prev
    }
  }
  return result;
};

var findLargetNodeInLeftSubtree = function(node) {
  if(node.left === null) {
    return null;
  }
  var prev = node, current = node.left;
  while(current.right !== null) {
    prev = current;
    current = current.right;
  }
  return {
    largetNode: current,
    largetNodeParent: prev
  };
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
/*
    5 
   / \         
  3   6   
 / \           
2   4              
*/
var node1 = new TreeNode(5);
var node2 = new TreeNode(3); 
var node3 = new TreeNode(6);
var node4 = new TreeNode(2); 
var node5 = new TreeNode(4); 
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
removeNode(node1, 3);
console.log(node1);
/*
    5 
   / \         
  2   6   
   \           
    4               
*/

var node1 = new TreeNode(5);
var node2 = new TreeNode(3); 
var node3 = new TreeNode(6);
var node4 = new TreeNode(2); 
var node5 = new TreeNode(4); 
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
removeNode(node1, 5);
console.log(node1);
/*
    4 
   / \         
  3   6   
 /            
2                 
*/


// version 2: TreeNode has parent pointer 
// replace the subtree rooted at node u with the subtree rooted at node v
// See CLRS page296
var transplant = function(root, u, v) {
  if(root === u) {
    root = v;
  }
  if(u === u.p.left) {
    u.p.left = v;
  } else {
    u.p.right = v;
  }
  if(v !== null) {
    v.p = u.p;
  }
};

var treeMininum = function(root) {
  var x = root;
  while(x.left !== null) {
    x = x.left;
  }
  return x;
};
var treeDelete = function(root, z) {
  if(z.left === null && z.right === null) {
    transplant(root, z, null);
  } else if(z.right === null) {
    transplant(root, z, z.left);
  } else {  
    var y = treeMininum(z.right);
    // console.log('y', y)
    if(y.p === z) {
      transplant(root, z, y);
      y.left = z.left;
      z.left.p = y;
    } else {
      transplant(root, y, y.right);
      transplant(root, z, y);
      y.left = z.left;
      z.left.p = y;
      y.right = z.right;
      z.right.p = y;    
    }
  }
  z.p = z.left = z.right = null;
};

var TreeNode = function(val) {
  this.val = val;
  this.p = this.left = this.right = null;
};
/*
    5 
   / \         
  3   6   
 / \           
2   4              
*/
var node1 = new TreeNode(5);
var node2 = new TreeNode(3); 
var node3 = new TreeNode(6);
var node4 = new TreeNode(2); 
var node5 = new TreeNode(4); 

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node2.p = node1;
node3.p = node1;
node4.p = node2;
node5.p = node2;

treeDelete(node1, node2)
console.log(node1);
