/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var lengthOfLongestSubstringKDistinct = function(s, k) {
//   var start = 0, end = 0;
//   var maxLength = 0;
//   var hash = {};
//   while(end < s.length) {
//     if(s.charAt(end) in hash) {
//       hash[s.charAt(end)]++;
//     } else {
//       hash[s.charAt(end)] = 1;
//     }

//     while(Object.keys(hash).length > k) {
//       hash[s.charAt(start)]--;
//       if(hash[s.charAt(start)] === 0) {
//         delete hash[s.charAt(start)];
//       }
//       start++;
//     }
//     if(maxLength < end - start + 1) {
//       maxLength = end - start + 1;
//     }      
//     end++;
//   }
//   return maxLength;
// };

var lengthOfLongestSubstringKDistinct = function(s, k) {
  var start = 0;
  var maxLength = 0;
  var hash = {}, minHeap = new MinHeap();
  for(var end = 0; end < s.length; end++) {
    var c = s.charAt(end);
    if(c in hash) {
      hash[c].key = end;
      // heapify minHeap
      minHeap.update(hash[c].heapInd, end);
    } else {
      var item = {key : end, character : c};
      hash[c] = item;
      minHeap.insert(item);
    }

    while(Object.keys(hash).length > k) {
      var min = minHeap.extractMin();
      delete hash[min.character];
      start = min.key + 1;
    }

    if(maxLength < end - start + 1) {
      maxLength = end - start + 1;
    }      
  }
  return maxLength;  
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
    this.heap.pop();
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
  update: function(i, newKey) {
    this.heap[i].key = newKey;
    minHeapSiftDown(i, this.heap, this.heapSize);
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
  if(left < heapSize && array[left].key < array[i].key) {
    smallest = left;
  }
  if(right < heapSize && array[right].key < array[smallest].key) {
    smallest = right;
  } 
  if(smallest !== i) {
    swap(array, i, smallest);
    minHeapSiftDown(smallest, array, heapSize);
  }
  array[i].heapInd = i;   
};
var minHeapSiftUp = function(i, array) {
  var parent = getParent(i);
  if(parent >= 0 && array[parent].key < array[i].key) {
    smallest = parent;
  } else {
    smallest = i;
  }   
  if(smallest !== parent && parent >= 0) {
    swap(array, parent, smallest);
    minHeapSiftUp(parent, array);
  }
  array[i].heapInd = i; 
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

console.log(lengthOfLongestSubstringKDistinct('eceba', 2)); // 3
console.log(lengthOfLongestSubstringKDistinct('', 2)); // 0
console.log(lengthOfLongestSubstringKDistinct('a', 2)); // 1
console.log(lengthOfLongestSubstringKDistinct('bacc', 2)); // 3
console.log(lengthOfLongestSubstringKDistinct('abaccc', 2)); // 4

// var array = [ { key: 0, character: 'b' },
//               { key: 1, character: 'a' },
//               { key: 2, character: 'c' } ];
// var minHeap = new MinHeap();
// minHeap.insert({ key: 0, character: 'b' });
// minHeap.insert({ key: 1, character: 'a' });
// minHeap.insert({ key: 2, character: 'c' });

// console.log(minHeap);
// console.log(minHeap.extractMin());
// console.log(minHeap);
