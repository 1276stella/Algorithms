/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(root === null) {
    return 'null';
  }
  var nodeQueue = [];
  nodeQueue.push(root);
  for(var i = 0; i < nodeQueue.length; i++) {
    var node = nodeQueue[i];
    if(node === null) {
      continue;
    }
    nodeQueue.push(node.left);
    nodeQueue.push(node.right);
  }

  while(nodeQueue[nodeQueue.length - 1] === null) {
    nodeQueue.pop();
  }  
  var valQueue = [];
  for(var i = 0; i < nodeQueue.length; i++) {
    var node = nodeQueue[i];
    if(node === null) {
      valQueue.push('null');
    } else {
      valQueue.push(node.val);
    }
  }  
  return valQueue.join(',');    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// version 2
var deserialize = function(data) {
  if(data === 'null') {
    return null;
  }  
  var results = data.split(',');
  var queue = [];
  var root = new TreeNode(+results[0]);
  queue.push(root);  
  for(var i = 1; i < results.length; i++) {
    if(results[i] !== 'null') {
      var node = new TreeNode(+results[i]);
      queue.push(node);
      var parentInd = Math.floor((i - 1) / 2);
      if(i % 2 === 1) {
        queue[parentInd].left = node;
      } else {
        queue[parentInd].right = node;
      }
    }
  }
  return root
};

// version 1 
// var deserialize = function(data) {
//   if(data === '') {
//     return null;
//   }
//   var results = data.split(',');
//   // console.log(results)
//   var queue = [];
//   var root = new TreeNode(+results[0]), k = 1;
//   queue.push(root);
//   while(queue.length > 0 && k < results.length) {
//     // console.log('queue', queue)
//     var l = queue.length;
//     var parent = [];
//     var nonNullCount = 0;
//     for(var i = 0; i < l; i++) {
//       var node = queue.shift();
//       if(node !== 'null') {
//         parent.push(node);
//         nonNullCount++;
//       }
//     }
//     // console.log('parent',parent)

//     for(var i = 0; i < 2 * nonNullCount && k < results.length; i++, k++) {
//       if(results[k] !== 'null' && i % 2 === 0) {
//         parent[i / 2].left = new TreeNode(+results[k]);
//         queue.push(parent[i / 2].left);    
//       } else if(results[k] !== 'null' && i % 2 === 1) {
//         parent[(i - 1) / 2].right = new TreeNode(+results[k]);
//         queue.push(parent[(i - 1) / 2].right);   
//       } else {
//         queue.push('null');    
//       }
//     }    
//   }
//   return root;
// };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

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
// console.log(serialize(node1));
console.log(deserialize(serialize(node1)));

var node2 = new TreeNode(2); 
var node3 = new TreeNode(3);
var node4 = new TreeNode(4); 
var node5 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
// console.log(serialize(node1));
console.log(deserialize(serialize(node1)));

/*
    1 
   / \         
  2   3   
     / \           
    4   5  
   / \
  6  7              
*/
var node6 = new TreeNode(6); 
var node7 = new TreeNode(7);

node4.left = node6;
node4.right = node7;
// console.log(serialize(node1));
console.log(deserialize(serialize(node1)));