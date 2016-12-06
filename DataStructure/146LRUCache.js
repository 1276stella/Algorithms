/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.listSize = 0;
    // dummy head and tail. No need to consider if the current node
    // is head or tail
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.hashMap = {};
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  if(!(key in this.hashMap)) {
    return -1;
  }
  var node = this.hashMap[key];
  this.moveToTail(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
  if(this.get(key) === -1) {
    var node = new Node(key, value);
    this.addToTail(node);
    this.hashMap[key] = node;
    this.listSize++;

    if(this.listSize > this.capacity) {
      var head = this.removeCurrent(this.head.next);
      delete this.hashMap[head.key];
      this.listSize--;
    }
  } else {
    // since this.get(key) has updated the access order
    this.hashMap[key].val = value;
  }
};
LRUCache.prototype.addToTail = function(node) {
  var prev = this.tail.prev;
  prev.next = node;
  node.prev = prev;
  node.next = this.tail;
  this.tail.prev = node;
};
LRUCache.prototype.moveToTail = function(node) {
  this.removeCurrent(node);
  this.addToTail(node);
};
LRUCache.prototype.removeCurrent = function(node) {
  var prev, next;
  prev = node.prev;
  next = node.next;
  prev.next = next;
  next.prev = prev;
  return node;
};
var Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = this.next = null;
};

var lru = new LRUCache(1);
lru.set(2,1);
console.log(lru.get(2)); // 1
lru.set(3,2);
console.log(lru.get(2)); // -1
console.log(lru.get(3)); // 2

var lru = new LRUCache(2);
lru.set(2,1);
console.log(lru.get(2)); // 1
lru.set(3,2);
console.log(lru.get(2)); // 1
console.log(lru.get(3)); // 2
lru.set(4,0);
console.log(lru.get(4)); // 0
console.log(lru.get(2)); // -1
console.log(lru.get(3)); // 2