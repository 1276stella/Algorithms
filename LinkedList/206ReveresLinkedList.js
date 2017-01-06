/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var prev = null, current = head;
  while(current !== null) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};
var node1 = new ListNode(2);
var node2 = new ListNode(4);
var node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
console.log(reverseList(node1));