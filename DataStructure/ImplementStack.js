// see problem at https://zhengyang2015.gitbooks.io/lintcode/content/implement_stack_495.html
var MyStack = function() {
  this.stack = {};
  this.stackSize = 0;
};

MyStack.prototype.push = function(x) {
  this.stack[this.stackSize++] = x;
};
MyStack.prototype.pop = function() {
  if(this.stackSize === 0) {
    return null;
  }
  var top = this.stack[this.stackSize - 1];
  delete this.stack[this.stackSize - 1];
  this.stackSize--;
  return top;
};
MyStack.prototype.top = function() {
  if(this.stackSize === 0) {
    return null;
  }
  return this.stack[this.stackSize - 1];  
};
MyStack.prototype.empty = function() {
  return this.stackSize === 0;
};

