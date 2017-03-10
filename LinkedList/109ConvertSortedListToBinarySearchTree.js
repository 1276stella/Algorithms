/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// T(n) = 2T(n/2) + O(n) = O(nlogn) 
var sortedListToBST = function(head) {
  if(head === null) {
    return null;
  } 
  if(head.next === null) {
    return new TreeNode(head.val);
  } 
  if(head.next.next === null) {
    var root = new TreeNode(head.val);
    root.right = new TreeNode(head.next.val);
    return root;
  }   
  var mid = findMedian(head); // O(n)
  var leftSubTree = sortedListToBST(head);
  var rightSubTree = sortedListToBST(mid.next);
  
  var root = new TreeNode(mid.val);
  root.left = leftSubTree;
  root.right = rightSubTree;
  return root;
};
// 1->2: 1->2 and return median 1
// 1->2->3: 1, 2->3 and return median 2
var findMedian = function(head) {
  var slow = head, fast = head.next;
  var dummy = new ListNode(0); dummy.next = head;
  var prevSlow = dummy;

  while(fast !== null && fast.next !== null) {
    prevSlow = prevSlow.next;
    slow = slow.next;
    fast = fast.next.next;
  }
  prevSlow.next = null;
  return slow;
};

var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;  
};
var node1 = new ListNode(1);
var node2 = new ListNode(2);
node1.next = node2;
console.log(sortedListToBST(node1));

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
console.log(sortedListToBST(node1));
