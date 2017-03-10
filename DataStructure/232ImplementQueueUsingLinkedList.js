// see problem description at https://zhengyang2015.gitbooks.io/lintcode/content/implement_queue_by_linked_list_492.html
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.dummyHead = new ListNode(0);
  this.tail = this.dummyHead;  
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  var newNode = new ListNode(x);
  this.tail.next = newNode;
  this.tail = newNode;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  var value;
  if(this.dummyHead.next === this.tail) {
    value = this.dummyHead.next.value;
    this.dummyHead.next = null;
    this.tail = this.dummyHead;
  } else if(this.dummyHead.next !== null) {
    value = this.dummyHead.next.value; 
    this.dummyHead.next = this.dummyHead.next.next;
  } else {
    value = null;
  }
  return value;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(this.dummyHead.next !== null) {
    return this.dummyHead.next.value;
  }
  return null;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.dummyHead === this.tail;
};

var ListNode = function(value) {
  this.value = value;
  this.next = null;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */