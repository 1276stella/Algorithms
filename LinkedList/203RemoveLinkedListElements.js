/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  var prev = dummyHead;
  var current = head;
  while(current !== null) {
    if(current.val === val) {
      prev.next = current.next;
    } else {
      prev = prev.next;
    }
    current = current.next;
  }
  return dummyHead.next;
};