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
// Version 1: Use heap to find the minimum value of the k elements
// Time complexity O(Nlogk), where N is the total node number of k lists. 
var buildAHeap = function(array) {
  var l = array.length;
  for(var i = Math.floor(l / 2) - 1; i >= 0; i--) {
      minHeapify(i, array, array.length);
  }
};
var minHeapify = function(i, array, heapSize) {
  var left = 2*i + 1;
  var right = 2*i + 2;
  var smallest = i;
  if(left < heapSize && array[left].val < array[i].val) {
    smallest = left;
  }
  if(right < heapSize && array[right].val < array[smallest].val) {
    smallest = right;
  }    
  if(smallest !== i) {
    var temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
    minHeapify(smallest, array, heapSize);
  }
}
var Heap = function(lists) {
  this.lists = [];
  lists.forEach(function(list){
    if(list !== null) {
      this.lists.push(list);
    }
  }.bind(this));
  this.heapSize = this.lists.length;
  buildAHeap(this.lists);
};
Heap.prototype.replaceMin = function(node) {
  this.lists[0] = node;
  minHeapify(0, this.lists, this.heapSize);
};
Heap.prototype.getMin = function() {
  return this.lists[0];
};

var mergeKLists = function(lists) {
  var heap = new Heap(lists);
  var infinity = Number.POSITIVE_INFINITY;
  var mergedListHead = current = new ListNode(0);
  while(heap.getMin() && heap.getMin().val !== infinity) {
    var minNode = heap.getMin();
    current.next = minNode;
    current = current.next;
    if(minNode.next !== null) {
      heap.replaceMin(minNode.next);
    } else {
      heap.replaceMin(new ListNode(infinity));     
    }
  }
  return mergedListHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var lists = [];
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
var node6 = new ListNode(6);
node1.next = node3;
node3.next = node5;

node2.next = node4;

lists.push(node1);
lists.push(node2);
lists.push(node6);
var mergedList = mergeKLists(lists);
while(mergedList !== null) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}

var lists = [];
var node1 = new ListNode(1);
lists.push(null);
lists.push(node1);

var mergedList = mergeKLists(lists);
while(mergedList !== null) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}
