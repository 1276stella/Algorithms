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
var detectCycle = function(head) {
  var meetNode = hasCycle(head);
  if(meetNode !== null) {
    while(head !== meetNode) {
      head = head.next;
      meetNode = meetNode.next;
    }
    return head;
  }
  return null;
};
// if it has cycle, return the node where slow and fast pointers meet
// else return null
var hasCycle = function(head) {
  var slow = head, fast = head;
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      return slow;
    }
  }
  return null;
};