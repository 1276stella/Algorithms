/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if(head === null) {
    return null;
  }
  // clone the node and insert it after the original node
  // assume original linked list is 1 -> 2 -> 3 -> null
  // after this, it becomes 1 -> 1' -> 2 -> 2' -> 3 -> 3' -> null  
  cloneNodes(head);
  // set up the random pointer of the cloned nodes    
  createRandomPointers(head);
  // split the two linked lists  
  return splitList(head);
};

var cloneNodes = function(head) {
  while(head !== null) {
    var clonedNode = new RandomListNode(head.label);
    clonedNode.next = head.next;
    head.next = clonedNode;
    head = head.next.next;
  }
};
var createRandomPointers = function(head) {
  while(head !== null) {
    if(head.random !== null) {
      head.next.random = head.random.next;
    }
    head = head.next.next;
  }
};
var splitList = function(head) {
  var count = 0;
  var originDummy = new RandomListNode(0), cloneDummy = new RandomListNode(0);
  var origin = originDummy, clone = cloneDummy;
  while(head !== null) {
    if(count % 2 === 0) {
      origin.next = head;
      origin = origin.next;
    } else {
      clone.next = head;
      clone = clone.next;
    }
    head = head.next;
    count++;
  }
  origin.next = null;
  clone.next = null;
  return cloneDummy.next; 
};
function RandomListNode(label) {
      this.label = label;
      this.next = this.random = null;
}

var node1 = new RandomListNode(1);
var node2 = new RandomListNode(2);
var node3 = new RandomListNode(3);

node1.next = node2;
node1.random = node3;
node2.next = node3;
node3.random = node2;

console.log(node1);
console.log(copyRandomList(node1));