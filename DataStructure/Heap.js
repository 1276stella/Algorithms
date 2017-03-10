/**
 * Implemention of Minimum Heap
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
/**
 * Implemention of Maximum Heap
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