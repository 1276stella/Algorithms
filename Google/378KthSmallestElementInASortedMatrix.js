/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// build a min heap using the first row of the matrix 
// time complexity O(n + klogn), where n is the number
// of rows/columns in matrix
var kthSmallest = function(matrix, k) {
  var n = matrix.length;
  if(n === 0) {
    return null;
  }
  
  var heapArray = matrix[0].map(function(val, i) {
    return {val: val, row: 0, col: i};
  })
  // O(n)
  var minHeap = new MinHeap(heapArray);
  var index = 0; 
  // O(klogn)
  while(minHeap.size() > 0) {
    var min = minHeap.extractMin();
    index++;
    if(index === k) {
      return min.val;
    }
    if(min.row + 1 < n) {
      minHeap.insert({val: matrix[min.row + 1][min.col], row: min.row + 1, col: min.col});
    }
  }
};
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
  if(left < heapSize && array[left].val < array[i].val) {
    smallest = left;
  }
  if(right < heapSize && array[right].val < array[smallest].val) {
    smallest = right;
  }    
  if(smallest !== i) {
    swap(array, i, smallest);
    minHeapSiftDown(smallest, array, heapSize);
  }
};
var minHeapSiftUp = function(i, array) {
  var parent = getParent(i);
  if(parent >= 0 && array[parent].val < array[i].val) {
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

var matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
];
console.log(kthSmallest(matrix, 8));