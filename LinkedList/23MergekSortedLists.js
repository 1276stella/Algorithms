/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length === 0) {
    return null;
  }
  return mergeKListsHelper(lists, 0, lists.length - 1);
};
var mergeKListsHelper = function(lists, start, end) {
  if(start > end) {
    return null;
  }
  if(start === end) {
    return lists[start];
  }
  var mid = start + Math.floor((end - start) / 2);
  var list1 = mergeKListsHelper(lists, start, mid);
  var list2 = mergeKListsHelper(lists, mid + 1, end);
  return mergeTwoLists(list1, list2);
};
var mergeTwoLists = function(l1, l2) {
  var dummy = new ListNode(0), head = dummy;
  while(l1 !== null && l2 !== null) {
    if(l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  if(l1 !== null) {
    head.next = l1;
  }
  if(l2 !== null) {
    head.next = l2;
  }
  return dummy.next;
};