/**
 * @constructor
 */
var Stack = function() {
    this.queue = new Queue();
    this.lastPushedElement = null;
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.queue.push(x);
    this.lastPushedElement = x;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    var backupQueue = new Queue();
    var element = null;
    while(this.queue.size() > 1) {
      element = this.queue.pop();
      backupQueue.push(element);
    }
    this.lastPushedElement = element;
    var theLastElement = this.queue.pop();
    this.queue = backupQueue;
    return theLastElement;
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.lastPushedElement;
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.queue.isEmpty();
};

/**
 * Simulate a queue using an object
 */
var Queue = function() {
  this.storage = {};
  this.storageSize = 0;
  this.beginning = 0;
};

Queue.prototype.push = function(value) {
  this.storage[this.storageSize + this.beginning] = value;
  this.storageSize++;
};

Queue.prototype.pop = function() {
  if (this.storageSize <= 0) {
    return null;
  }
  var result = this.storage[this.beginning];
  this.storageSize--;
  this.beginning++;
  return result;
};

Queue.prototype.peek = function() {
  if (this.storageSize <= 0) {
    return null;
  }
  return this.storage[this.beginning];
};

Queue.prototype.size = function() {
  return this.storageSize;
};

Queue.prototype.isEmpty = function() {
  return this.storageSize === 0;
};

var stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());

// var queue = new Queue();
// queue.push(0);
// queue.push(1);
// queue.push(2);
// console.log(queue.peek());
// console.log(queue.pop());
// console.log(queue.peek());