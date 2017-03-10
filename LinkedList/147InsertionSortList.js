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
// version 1: dummy points to head
// var insertionSortList = function(head) {
//   if(head === null || head.next === null) {
//     return head;
//   }
//   var prevI = head, i = head.next;
//   var dummy = new ListNode(0);
//   dummy.next = head;
//   while(i !== null) {
//     var prevJ = dummy, j = dummy.next;
//     while(j !== i && j.val < i.val) {
//       prevJ = prevJ.next;
//       j = j.next;
//     }
//     if(j !== i) {
//       prevI.next = i.next;
//       prevJ.next = i;
//       i.next = j;
//       i = prevI.next;
//     } else {
//       i = i.next;
//       prevI = prevI.next;
//       j = j.next;
//       prevJ = prevJ.next;
//     }
//   }
//   return dummy.next;
// };

// version 2: insert the node into the list beginning with dummy
var insertionSortList = function(head) {
  var dummy = new ListNode(0);
  while(head !== null) {
    var node = dummy;
    while(node.next !== null && node.next.val < head.val) {
      node = node.next;
    }
    var temp = head.next;
    head.next = node.next;
    node.next = head;
    head = temp;
  }
  return dummy.next;
};
var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};

var node1 = new ListNode(3);
var node2 = new ListNode(4);
var node3 = new ListNode(5);
var node4 = new ListNode(2);
var node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(JSON.stringify(insertionSortList(node1)));