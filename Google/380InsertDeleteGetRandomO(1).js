/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.hash = {};
  this.array = [];
  this.lastInd = -1;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(val in this.hash) {
    return false;
  } else {
    this.lastInd++;
    this.array[this.lastInd] = val;
    this.hash[val] = this.lastInd;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(val in this.hash) {
    var removedInd = this.hash[val];
    delete this.hash[val];
    if(removedInd !== this.lastInd) {
      var lastVal = this.array[this.lastInd];
      this.array[removedInd] = lastVal;
      this.hash[lastVal] = removedInd;
    }
    this.lastInd--;
    return true
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  if(this.lastInd > -1) {
    var randomInd = Math.floor(Math.random() * (this.lastInd + 1));
    return this.array[randomInd];
  } else {
    return null;
  }
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */