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
  var stack1 = pushToStack(l1);
  var stack2 = pushToStack(l2);
  var sum, carry = 0;
  var head, next = null;
  while(stack1.length !== 0 && stack2.length !== 0) {
    var sum = stack1.pop() + stack2.pop() + carry;
    carry = Math.floor(sum / 10);
    head = new ListNode(sum % 10);
    head.next = next;
    next = head; 
  }
  while(stack1.length !== 0) {
    var sum = stack1.pop() + carry;
    carry = Math.floor(sum / 10);
    head = new ListNode(sum % 10);
    head.next = next;
    next = head; 
  }
  while(stack2.length !== 0) {
    var sum = stack2.pop() + carry;
    carry = Math.floor(sum / 10);
    head = new ListNode(sum % 10);
    head.next = next;
    next = head; 
  }  
  if(carry !== 0) {
    head = new ListNode(carry);
    head.next = next;    
  }
  return head;
};

var pushToStack = function(list) {
  var stack = [];
  while(list !== null) {
    stack.push(list.val);
    list = list.next;
  }
  return stack;
};