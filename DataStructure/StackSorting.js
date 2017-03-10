/**
 * see problem at https://aaronice.gitbooks.io/lintcode/content/data_structure/stack_sorting.html
 * @param stack an integer stack
 * @return void
 */ 
// worst scenario is that stack is in descending order (smallest on the top), which
// takes O(n^2) in time complexity
var stackSorting = function(stack) {
  var helper = new Stack();
  while(stack.size() > 0) {
    helper.push(stack.pop());
  }

  while(helper.size() > 0) {
    if(stack.peek() === null || stack.peek() < helper.peek()) {
      stack.push(helper.pop());
    } else {
      var temp = helper.pop();
      while(stack.peek() !== null || temp < stack.peek()) {
        helper.push(stack.pop());
      }
      stack.push(temp);
    }
  }
};

var Stack = function() {
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(obj){
  this.storage[this.stackSize] = obj;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  if(this.stackSize<=0){
    return null;
  }
  var result = this.storage[this.stackSize-1];
  this.stackSize--;
  return result;
};

Stack.prototype.peek = function(){
  if(this.size() === 0) {
    return null;
  }
  return this.storage[this.stackSize - 1];
};

Stack.prototype.size = function(){
  return this.stackSize;
};

var stack = new Stack();
stack.push(4);
stack.push(2);
stack.push(1);
stack.push(3);
stackSorting(stack);
console.log(stack);