var LFUCache = function(capacity) {
  /** keyHashTable: key -> {keyNode}
   *  frequencyHashTable: frequency -> {frequencyNode}
   *  
   *  Definition for a keyNode.
   *  function KeyNode(key, value) {
   *     this.key = key;
   *     this.value = value;
   *     this.freq = 1;
   *     this.prev = this.next = null;
   *  }
   *  Definition for a freqNode.
   *  function FreqNode(freq) {
   *     this.freq = freq;
   *     this.prev = this.next = null;
   *     this.first = this.last = null;
   *  }
   */
  this.keyHashTable = {};
  this.frequencyHashTable = {}; 
  this.head = new FreqNode(0);
  this.capacity = capacity; 
};

/** 
 * @param {number} key
 * @return {void}
 */
LFUCache.prototype.increaseFreqByOne = function(key) {
  // Assume key is in the table and list
  var keyNode = this.keyHashTable[key];
  var freqNode = this.frequencyHashTable[keyNode.freq];
  this.removeKeyNodeFromCurrentFreqNodeList(keyNode);
  keyNode.freq++;

  this.insertKeyNodeToNextFreqNode(keyNode, freqNode);
  if(freqNode.first === null) {
    this.removeFreqNode(freqNode);
  }  
};

LFUCache.prototype.removeFreqNode = function(freqNode) {
  freqNode.prev.next = freqNode.next;
  if(freqNode.next !== null) {
    freqNode.next.prev = freqNode.prev;
  }  
  delete this.frequencyHashTable[freqNode.freq];
};

LFUCache.prototype.removeKeyNodeFromCurrentFreqNodeList = function(keyNode) {
  var freqNode = this.frequencyHashTable[keyNode.freq];
  if(freqNode.first === freqNode.last) {
    // if keyNode is the only keyNode in the freqNode list
    freqNode.first = null;
    freqNode.last = null;
  } else if(keyNode.prev === freqNode) {
    // if it is the first keyNode in the freqNode list
    freqNode.first = keyNode.next;
    keyNode.next.prev = keyNode.prev;    
  } else if(keyNode.next === null) {
    // if it is the last keyNode in the freqNode list
    keyNode.prev.next = keyNode.next;
    freqNode.last = keyNode.prev;
  } else {
    keyNode.prev.next = keyNode.next;
    keyNode.next.prev = keyNode.prev;
  }
};

LFUCache.prototype.insertKeyNodeToNextFreqNode = function(keyNode, freqNode) {
  var nextFreqNode;
  if(keyNode.freq in this.frequencyHashTable) {
    nextFreqNode = this.frequencyHashTable[keyNode.freq];
    // insert keyNode as the first node of nextFreqNode list
    nextFreqNode.first.prev = keyNode;
    keyNode.next = nextFreqNode.first;
    nextFreqNode.first = keyNode;
    keyNode.prev = nextFreqNode;
  } else {
    nextFreqNode = new FreqNode(keyNode.freq);

    this.frequencyHashTable[keyNode.freq] = nextFreqNode;
    if(freqNode.next !== null) {
      freqNode.next.prev = nextFreqNode;
    }
    nextFreqNode.next = freqNode.next;
    freqNode.next = nextFreqNode;
    nextFreqNode.prev = freqNode;
    // insert keyNode as the first node of nextFreqNode list
    nextFreqNode.first = keyNode;
    nextFreqNode.last = keyNode;
    keyNode.prev = nextFreqNode;
    keyNode.next = null;
  }
};
/** 
 * @param {void}
 * @return {void}
 */
LFUCache.prototype.removeLFUNode = function() {
  var firstFreqNode = this.head.next;
  if(firstFreqNode !== null) {
    // remove the lfu key node from the list
    var lfuKeyNode = firstFreqNode.last;
    this.removeKeyNodeFromCurrentFreqNodeList(lfuKeyNode);
    // if the list is empty
    if(firstFreqNode.first === null) {
      this.removeFreqNode(firstFreqNode);
    }      
    // remove the lfu key node's key from the keyHashTable
    delete this.keyHashTable[lfuKeyNode.key];  
  }
};
/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if(key in this.keyHashTable) {
    this.increaseFreqByOne(key);
    return this.keyHashTable[key].value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if(this.capacity <= 0) {
    return;
  }
  if(key in this.keyHashTable) {
    this.keyHashTable[key].value = value;
    this.increaseFreqByOne(key);
  } else {
    // put the new node into keyHashTable
    var keyNode = new KeyNode(key, value);
    if(Object.keys(this.keyHashTable).length === this.capacity) {
      this.removeLFUNode();
    }
    console.log('hi', this.head.next);
    this.keyHashTable[key] = keyNode;
    this.insertKeyNodeToNextFreqNode(keyNode, this.head);
  }
};

//  Definition for a keyNode.
function KeyNode(key, value) {
  this.key = key;
  this.value = value;
  this.freq = 1;
  this.prev = this.next = null;
};
//  Definition for a freqNode.
function FreqNode(freq) {
  this.freq = freq;
  this.prev = this.next = null;
  this.first = this.last = null;
};

var lfu = new LFUCache(2);
lfu.put('firstname', 'jia');
lfu.put('lastname', 'li');
// console.log(lfu.head.next.first.prev);

lfu.put('gender', 'female');
// console.log(lfu.head.next);

console.log(lfu.get('gender'));
// console.log(lfu.head.next);
// console.log(lfu.head.next.next);



// lfu.put('lastname', 'he');
// console.log(lfu.keyHashTable);
// console.log(lfu.frequencyHashTable);
lfu.put('husband', 'peng');

console.log(lfu.head.next);


/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */