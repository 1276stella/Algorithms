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
    var node = head;
    while(node !== null) {
        var clonedNode = new RandomListNode(node.label);
        clonedNode.next = node.next;
        node.next = clonedNode;
        node = node.next.next;
    }

    // set up the random pointer of the cloned nodes
    node = head;
    while(node !== null) {
        clonedNode = node.next;
        if(node.random !== null) {
            clonedNode.random = node.random.next;
        }
        node = node.next.next;
    }    
    
    // split the two linked lists
    var clonedHead = head.next;
    var current = head;
    var next = current.next;
    while(next !== null) {
        current.next = current.next.next;
        current = next;
        next = current.next;
    }
    
    return clonedHead;
    
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
