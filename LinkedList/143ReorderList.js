/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if(head === null || head.next === null) {
    return;
  }  
  var mid = findMiddle(head);
  var reversedRight = reverse(mid.next);
  mid.next = null;
  merge(head, reversedRight);
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
  var prev = null, current = head;
  while(current !== null) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

var merge = function(left, right) {
  var dummy = new ListNode(0), tail = dummy;
  var count = 0;
  while(left !== null && right !== null) {
    if(count % 2 === 0) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
    count++;
  }
  if(left !== null) {
    tail.next = left;
  } else {
    tail.next = right;
  }
};
var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
reorderList(node1);
console.log(node1);