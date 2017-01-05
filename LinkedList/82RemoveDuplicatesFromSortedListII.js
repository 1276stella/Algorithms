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
var deleteDuplicates = function(head) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  var prev = dummyHead,
      current = head;
  while(current !== null) {
    if(current.next !== null && current.val === current.next.val) {
      while(current.next !== null && current.val === current.next.val) {
        current = current.next;
      }
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }    
  return dummyHead.next;
};