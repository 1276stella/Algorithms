/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var dummyHead = new ListNode(0), l3 = dummyHead;
  var sum, carry = 0;
  while(l1 !== null && l2 !== null) {
    sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    l3.next = new ListNode(sum % 10);
    l1 = l1.next;
    l2 = l2.next;
    l3 = l3.next;
  }
  while(l1 !== null) {
    sum = l1.val + carry;
    carry = Math.floor(sum / 10);
    l3.next = new ListNode(sum % 10);
    l1 = l1.next;
    l3 = l3.next;
  }
  while(l2 !== null) {
    sum = l2.val + carry;
    carry = Math.floor(sum / 10);
    l3.next = new ListNode(sum % 10);
    l2 = l2.next;
    l3 = l3.next;
  }    
  if(carry !== 0) {
    l3.next = new ListNode(carry);
  }  
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

var node4 = new ListNode(5);
var node5 = new ListNode(6);
var node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

console.log(addTwoNumbers(node1, node4));