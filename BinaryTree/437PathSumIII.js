/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// This version returns the complete paths 
// var pathSum = function(root, target) {
//   var dfs = function(root, path, target, sum, sumHash) {
//     if(root === null) {
//       return;
//     }
//     path.push(root.val);
//     sum += root.val;
//     if(sum - target in sumHash) {
//       // sum of subarray path[startInd, ..., endOfPath] = target
//       // push it to results
//       var indies = sumHash[sum - target];
//       for(var i = 0; i < indies.length; i++) {
//         sumOfSubarray(path, indies[i] + 1);
//       }
//     } 
//     if(!(sum in sumHash)) {
//       sumHash[sum] = [];
//     }
//     sumHash[sum].push(path.length - 1);

//     dfs(root.left, path, target, sum, sumHash);
//     dfs(root.right, path, target, sum, sumHash);
//     sumHash[sum].pop();
//     if(sumHash[sum].length === 0) {
//       delete sumHash[sum];
//     }
//     sum -= root.val;
//     path.pop();
//   };

//   var sumOfSubarray = function(path, startInd) {
//     var temp = []
//     for(var j = startInd; j < path.length; j++) {
//       temp.push(path[j]);
//     }
//     results.push(temp.slice());
//   };

//   var results = [], sumHash = {};
//   sumHash[0] = [-1];
//   dfs(root, [], target, 0, sumHash);
//   return results;
// };

// This version returns the number of the paths
// var pathSum = function(root, target) {
//   // path stores the labels from root to current node
//   // sum is total sum so far
//   // e.g. path = [10, 5, 3]
//   // sum = 10 + 5 + 3 = 18, target = 8
//   // sumHash's key is the calculated sum so far for a given path
//   // sumHash's value is the index array (the same sum may occur at different indices)
//   // sumHash = {0: [-1],
//   //            10: [0],
//   //            15, [1],
//   //            18, [2]  
//   // }
//   var dfs = function(root, path, target, sum, sumHash) {
//     if(root === null) {
//       return;
//     }
//     path.push(root.val);
//     sum += root.val;
//     if(sum - target in sumHash) {
//       // if sum - target exists in previous sum
//       // it means that there is subarray whose sum = target
//       var indies = sumHash[sum - target];
//       for(var i = 0; i < indies.length; i++) {
//         count++;
//       }
//     } 
//     if(!(sum in sumHash)) {
//       sumHash[sum] = [];
//     }
//     sumHash[sum].push(path.length - 1);

//     dfs(root.left, path, target, sum, sumHash);
//     dfs(root.right, path, target, sum, sumHash);
//     sumHash[sum].pop();
//     if(sumHash[sum].length === 0) {
//       delete sumHash[sum];
//     }
//     sum -= root.val;
//     path.pop();
//   };

//   var count = 0, sumHash = {};
//   sumHash[0] = [-1];
//   dfs(root, [], target, 0, sumHash);
//   return count;
// };

// version 2
var pathSum = function(root, sum) {
  if(root === null) {
    return 0;
  }  
  return sumThroughRoot(root, sum, 0) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
// sumThroughRoot counts the path starting from node
var sumThroughRoot = function(root, sum, prevSum) {
  var res = 0;
  if(root === null) {
    return res;
  }
  var curtSum = prevSum + root.val;
  if(curtSum === sum) {
    res = 1;
  }
  return res + sumThroughRoot(root.left, sum, curtSum) + sumThroughRoot(root.right, sum, curtSum);
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

var node1 = new TreeNode(10);
var node2 = new TreeNode(5); 
var node3 = new TreeNode(-3);
var node4 = new TreeNode(3); 
var node5 = new TreeNode(2); 
var node6 = new TreeNode(11);
var node7 = new TreeNode(3); 
var node8 = new TreeNode(-2);
var node9 = new TreeNode(1); 

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node5.right = node9;
console.log(pathSum(node1, 8));