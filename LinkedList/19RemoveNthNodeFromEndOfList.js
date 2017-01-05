/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  var i = dummyHead, count = 0;
  while(count < n) {
    i = i.next;
    count++;
  }

  var j = dummyHead;
  while(i.next !== null) {
    i = i.next;
    j = j.next;
  }
  j.next = j.next.next;
  return dummyHead.next;
};