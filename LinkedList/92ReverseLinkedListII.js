/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  var prev = dummyHead, current = head;
  var count = 1;
  while(count < m) {
    prev = prev.next;
    current = current.next;
    count++;
  }
  var endOfL1 = prev, startOfL2 = current;
  while(count <= n) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }
  endOfL1.next = prev;
  startOfL2.next = current;
  return dummyHead.next;
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
console.log(reverseBetween(node1, 2, 3));