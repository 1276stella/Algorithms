/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var dummy = new ListNode(0), tail = dummy;
  while(head !== null) {
    var results = reverseLessThanKGroup(head, k);
    tail.next = results.head1;
    tail = results.tail1;
    head = results.head2;
  }
  return dummy.next;
};
// Example: 1->2->3->4->5, k = 3
// return {head1: 3, head2: 4}
// 4->5, k = 3
// return {head1: 4, head2: null}
var reverseLessThanKGroup = function(head, k) {
  var prev = null;
  var tail = head;
  while(k > 0 && head !== null) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
    k--;
  }
  // length of the last group is less than k
  if(k > 0) {
    head = prev;
    prev = null;
    while(head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    tail = null;       
  }
  return {head1: prev, tail1: tail, head2: head};
};

var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
// node3.next = node4;
// node4.next = node5;

console.log(JSON.stringify(reverseKGroup(node1, 2)));