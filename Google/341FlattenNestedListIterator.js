/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
// use a stack
// if use a queue, when the beginning of the queue is a list, it is hard to put all its elements to 
// beginning of the queue 
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = [];
  this.pushListToStack(nestedList);
};

NestedIterator.prototype.pushListToStack = function(nestedList) {
  var temp = [];
  for(var i = 0; i < nestedList.length; i++) {
    temp.push(nestedList[i]);
  }
  while(temp.length !== 0) {
    this.stack.push(temp.pop());
  }
};
/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  var l = this.stack.length;
  while(l !== 0 && !this.stack[l - 1].isInteger()){
    this.pushListToStack(this.stack.pop().getList());
    l = this.stack.length;
  }    
  return l > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  if(!this.hasNext()) {
    return null;
  }
  return this.stack.pop().getInteger();
};

// recursion version, not recommended 
var NestedIterator = function(nestedList) {
  var flattenNestedList = function(nestedList) {
    var flattenedArray = [];
    for(var i = 0; i < nestedList.length; i++) {
      if(nestedList[i].isInteger()) {
        flattenedArray.push(nestedList[i].getInteger());
      } else {
        var flattenedArray2 = flattenNestedList(nestedList[i].getList());
        for(var j = 0; j < flattenedArray2.length; j++) {
          flattenedArray.push(flattenedArray2[j]);
        }
      }
    }
    return flattenedArray;
  };

  this.flattenedArray = flattenNestedList(nestedList);
  this.currentIndex = -1;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  var length = this.flattenedArray.length;
  return length > 0 && this.currentIndex < length - 1; 
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  var length = this.flattenedArray.length;    
  if(length === 0 || this.currentIndex >= length - 1) {
    return null;
  }
  return this.flattenedArray[++this.currentIndex];  
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/