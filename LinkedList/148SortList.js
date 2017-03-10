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
// quicksort version 
// var sortList = function(head) {
//   if(head === null || head.next === null) {
//     return head;
//   }
//   var partitionedLists = partition(head); // O(n)
//   var leftHead = sortList(partitionedLists.leftHead);
//   var rightHead = sortList(partitionedLists.rightHead);
//   return concat(leftHead, partitionedLists.equalHead, rightHead); // O(n)
// };
// var partition = function(head) {
//   var pivotValue = head.val;
//   var leftDummy = new ListNode(0), left = leftDummy;
//   var rightDummy = new ListNode(0), right = rightDummy;
//   var equalDummy = new ListNode(0), equal = equalDummy;

//   while(head !== null) {
//     if(head.val < pivotValue) {
//       left.next = head;
//       left = left.next;
//     } else if(head.val > pivotValue) {
//       right.next = head;
//       right = right.next;      
//     } else {
//       equal.next = head;
//       equal = equal.next;      
//     }
//     head = head.next;
//   }

//   left.next = null;
//   right.next = null;
//   equal.next = null;

//   return {
//     leftHead: leftDummy.next,
//     rightHead: rightDummy.next,
//     equalHead: equalDummy.next,    
//   };
// };

// var concat = function(list1, list2, list3) {
//   var dummy = new ListNode(0), tail = dummy;
//   tail.next = list1; tail = getTail(tail);
//   tail.next = list2; tail = getTail(tail);
//   tail.next = list3; tail = getTail(tail);
//   return dummy.next;
// };

// var getTail = function(list) {
//   if(list === null) {
//     return null;
//   }
//   while(list.next !== null) {
//     list = list.next;
//   }
//   return list;
// }

// merge sort version
var sortList = function(head) {
  if(head === null || head.next === null) {
    return head;
  }
  var lists = divide(head); // O(n)
  var left = sortList(lists.left);
  var right = sortList(lists.right);
  return merge(left, right); // O(n)
};

// 1->2: 1, 2
// 1->2->3: 1->2, 3
var divide = function(head) {
  var mid = findMiddle(head);
  var left = head, right = mid.next;
  mid.next = null;
  return {left: left, right: right};
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

var merge = function(left, right) {
  var dummy = new ListNode(0), tail = dummy;
  while(left !== null && right !== null) {
    if(left.val < right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }
  if(left !== null) {
    tail.next = left;
  } else {
    tail.next = right;
  }  
  return dummy.next;
};
var ListNode = function(val) {
  this.val = val;
  this.next = null;  
};
var node1 = new ListNode(3);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(1);
var node5 = new ListNode(5);
var node6 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
console.log(sortList(node1));