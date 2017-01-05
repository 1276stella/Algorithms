/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// Version 1: follows the partition algorithm in quicksort 
var partition = function(head, x) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;

  var stored = dummyHead, prev = dummyHead, current = head;
  while(current !== null) {
    if(current.val < x && prev !== stored) {
      // remove current node
      prev.next = current.next;
      // insert current node after node stored
      current.next = stored.next
      stored.next = current;
      // update current and stored
      current = prev.next
      stored = stored.next;
    } else if(current.val < x && prev === stored) {
      prev = prev.next;
      current = current.next;
      stored = stored.next;
    } else {
      prev = prev.next;
      current = current.next;
    }
  }
  return dummyHead.next;
};
// Version 2: create left and right two lists, left for all nodes whose values are less than x and right for
// all nodes whose value are greater or equal than x
var partition = function(head, x) {
  var leftDummy = new ListNode(0);
  var rightDummy = new ListNode(0);
  var left = leftDummy, right = rightDummy;
  var current = head;
  while(current !== null) {
    if(current.val < x) {
      left.next = current;
      left = left.next;
    } else {
      right.next = current;
      right = right.next;
    }
    current = current.next;
  }
  left.next = rightDummy.next;
  right.next = null;
  return leftDummy.next;
};
var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};

var node1 = new ListNode(1);
console.log(partition(node1, 2));


var node2 = new ListNode(4);
var node3 = new ListNode(3);
var node4 = new ListNode(2);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(partition(node1, 3));
