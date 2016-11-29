/**
 * @constructor
 */
var Queue = function() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
};

Queue.prototype.moveItems = function() {
  if(this.stack2.empty()) {
    while(!this.stack1.empty()) {
      this.stack2.push(this.stack1.pop());
    }
  }
};
/**
 * @param {number} x
 * @returns {void}
 */ 
Queue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  this.moveItems();
  return this.stack2.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  this.moveItems();
  return this.stack2.peek();    
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.stack1.empty() && this.stack2.empty();   
};
/**
 * Simulate a stack using an object
 */
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(obj){
  this.storage[this.stackSize] = obj;
  this.stackSize++;
}

Stack.prototype.pop = function(){
  if(this.stackSize<=0){
    return null;
  }
  var result = this.storage[this.stackSize-1];
  this.stackSize--;
  return result;
}

Stack.prototype.peek = function(){
  if(this.stackSize<=0){
    return null;
  }
  return this.storage[this.stackSize-1];
}

Stack.prototype.size = function(){
  return this.stackSize;
}

Stack.prototype.empty = function(){
  return this.stackSize === 0;
}