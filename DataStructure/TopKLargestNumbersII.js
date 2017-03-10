// see problem at https://aaronice.gitbooks.io/lintcode/content/data_structure/top_k_largest_numbers_ii.html
var TopK = function(k) {
  this.k = k;
  this.array = new MinHeap();
};

TopK.prototype.add = function(x) {
  if(this.array.heapSize <= this.k - 1) {
    this.array.insert(x);
    return;
  } 
  if(this.array.getMin() < x) {
    this.array.extractMin();
    this.array.insert(x);
  }
};
TopK.prototype.topK = function() {
  var result = [];
  for(var i = 0; i < this.array.size(); i++) {
    result.push(this.array.heap[i]);
  }
  return result;
};


var MinHeap = function(array) {
  this.heap = array || [];
  this.heapSize = this.heap.length;
  buildAMinHeap(this.heap);
};
MinHeap.prototype = {
  extractMin: function() {
    var min = this.heap[0];
    swap(this.heap, 0, --this.heapSize);
    minHeapSiftDown(0, this.heap, this.heapSize);
    return min;
  },
  getMin: function() {
    return this.heap[0];
  },
  insert: function(element) {
    this.heap[this.heapSize] = element;
    this.heapSize++;
    minHeapSiftUp(this.heapSize - 1, this.heap, this.heapSize);
  },
  size: function() {
    return this.heapSize;
  }
};
var buildAMinHeap = function(array) {
  var l = array.length;
  for(var i = Math.floor(l / 2) - 1; i >= 0; i--) {
      minHeapSiftDown(i, array, array.length);
  }
};
var minHeapSiftDown = function(i, array, heapSize) {
  var left = getLeftChild(i);
  var right = getRightChild(i);
  var smallest = i;
  if(left < heapSize && array[left] < array[i]) {
    smallest = left;
  }
  if(right < heapSize && array[right] < array[smallest]) {
    smallest = right;
  }    
  if(smallest !== i) {
    swap(array, i, smallest);
    minHeapSiftDown(smallest, array, heapSize);
  }
};
var minHeapSiftUp = function(i, array) {
  var parent = getParent(i);
  if(parent >= 0 && array[parent] < array[i]) {
    smallest = parent;
  } else {
    smallest = i;
  }   
  if(smallest !== parent && parent >= 0) {
    swap(array, parent, smallest);
    minHeapSiftUp(parent, array);
  }
};

var getLeftChild = function(i) {
  return 2 * i + 1;
};
var getRightChild = function(i) {
  return 2 * i + 2;
};
var getParent = function(i) {
  return Math.floor((i - 1)/2);  
};
var getSibling = function(i) {
  var parent = getParent(i);
  var left = getLeftChild(parent);
  var right = getRightChild(parent);

  if(i === left) {
    return right;
  }
  if(i === right) {
    return left;
  } 
};
var swap = function(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
};

var s = new TopK(3);
s.add(3);
s.add(10);
console.log(s.topK()); // [3, 10]
s.add(1000);
s.add(-99);
console.log(s.topK()); // [1000, 10, 3]
s.add(4);
console.log(s.topK()); // [1000, 10, 4]
s.add(100);
console.log(s.topK()); // [1000, 100, 10]
