/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(head === null) {
    return true;
  }
  var mid = findMiddle(head);
  var head2 = reverse(mid.next);
  mid.next = null;

  return isPalindromeHelper(head, head2);
};

// 1->2: 1
// 1->2->3: 2
var findMiddle = function(head) {
  var slow = head, fast = head.next;
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

var reverse = function(head) {
  var prev = null;
  while(head !== null) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var isPalindromeHelper = function(l1, l2) {
  while(l1 !== null && l2 !== null) {
    if(l1.val !== l2.val) {
      return false
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return true;
};