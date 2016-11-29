function MinStack() {
  this.valueStack = [];
  this.minValueStack = [];
  this.stackLength = 0;
}
MinStack.prototype.push = function(element) {
  this.valueStack[this.stackLength] = element;
  if(this.stackLength === 0) {
    this.minValueStack[this.stackLength] = element;
  } else {
    var currentMin = this.getMin();
    this.minValueStack[this.stackLength] = Math.min(currentMin, element);
  }
  this.stackLength++;
};
MinStack.prototype.pop = function() {
  if(this.stackLength > 0) {
    this.stackLength--;
  }
};
MinStack.prototype.top = function() {
  if(this.stackLength > 0) {
    return this.valueStack[this.stackLength - 1];
  } else {
    return null;
  }
};
MinStack.prototype.getMin = function() {
  if(this.stackLength > 0) {
    return this.minValueStack[this.stackLength - 1]; 
  } else {
    return null;
  }
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   // Returns -3.
minStack.pop();
console.log(minStack.top());     // Returns 0.
console.log(minStack.getMin());   // Returns -2.