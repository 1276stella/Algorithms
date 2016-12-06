/**
 * @constructor
 */
var MedianFinder = function() {
    this.median = Number.MIN_SAFE_INTEGER;
    this.heap1 = new MaxHeap();
    this.heap2 = new MinHeap();
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
  if(num >= this.median) {
    this.heap2.insert(num);
  } else {
    this.heap1.insert(num);
  }
  var size1 = this.heap1.heapSize;
  var size2 = this.heap2.heapSize;
  if(size1 - size2 === 2) {
    this.heap2.insert(this.heap1.extractMax());
  } else if(size1 - size2 === -2) {
    this.heap1.insert(this.heap2.extractMin());
  }
  size1 = this.heap1.heapSize;
  size2 = this.heap2.heapSize;  
  if(size1 - size2 === 1) {
    this.median = this.heap1.getMax();
  } else if(size1 - size2 === -1) {
    this.median = this.heap2.getMin();
  } else if(size1 - size2 === 0) {
    this.median = (this.heap1.getMax() + this.heap2.getMin()) / 2;
  }
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
  if(this.median === Number.MIN_SAFE_INTEGER) {
    return null;
  }
    return this.median;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

 /**
 * Implemention of Minimum Heap
 * Note: min heap and max heap should be able to combine into one function
 */
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
}

/**
 * Implemention of Maximum Heap
 * Note: min heap and max heap should be able to combine into one function 
 */
var MaxHeap = function(array) {
  this.heap = array || [];
  this.heapSize = this.heap.length;
  buildAMaxHeap(this.heap);
};
MaxHeap.prototype = {
  extractMax: function() {
    var max = this.heap[0];
    swap(this.heap, 0, --this.heapSize);
    maxHeapSiftDown(0, this.heap, this.heapSize);
    return max;
  },
  getMax: function() {
    return this.heap[0];
  },
  insert: function(element) {
    this.heap[this.heapSize] = element;
    this.heapSize++;
    maxHeapSiftUp(this.heapSize - 1, this.heap, this.heapSize);
  }
};
var buildAMaxHeap = function(array) {
  var l = array.length;
  for(var i = Math.floor(l / 2) - 1; i >= 0; i--) {
      maxHeapSiftDown(i, array, array.length);
  }
};
var maxHeapSiftDown = function(i, array, heapSize) {
  var left = getLeftChild(i);
  var right = getRightChild(i);
  var largest = i;
  if(left < heapSize && array[left] > array[i]) {
    largest = left;
  }
  if(right < heapSize && array[right] > array[largest]) {
    largest = right;
  }    
  if(largest !== i) {
    swap(array, i, largest);
    maxHeapSiftDown(largest, array, heapSize);
  }
};
var maxHeapSiftUp = function(i, array) {
  var parent = getParent(i);
  if(parent >= 0 && array[parent] > array[i]) {
    largest = parent;
  } else {
    largest = i;
  }   
  if(largest !== parent && parent >= 0) {
    swap(array, parent, largest);
    maxHeapSiftUp(parent, array);
  }
}

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