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
var rotateRight = function(head, k) {
  if(k === 0 || head === null) {
    return head;
  }
  var results = getLengthAndTail(head);
  var l = results.length, tail = results.tail;
  tail.next = head;
  k = l - k % l;

  while(k > 0) {
    tail = tail.next;
    k--;
  }  
  head = tail.next;
  tail.next = null;
  return head;
};
var getLengthAndTail = function(head) {
  var l = 1;
  while(head.next !== null) {
    l++;
    head = head.next;
  }
  return {length: l, tail: head};
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
node3.next = node4;
node4.next = node5;

console.log(rotateRight(node1, 6));
