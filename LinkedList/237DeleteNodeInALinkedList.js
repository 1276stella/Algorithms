/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  var prev;
  while(node.next !== null) {
    prev = node;
    node.val = node.next.val;
    node = node.next;
  }
  prev.next = null;
};