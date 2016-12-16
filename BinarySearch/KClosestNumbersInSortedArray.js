/** 
 * Given a sorted array and a value x, find k closest numbers to x in array
 * @param array
 * @param k
 * @param x
 * return: k closest numbers.
 */
// Version 1: use heap 
// 1. use binary search to find the insert position of x
// 2. say k closest numbers less than x are x_left and k closest numbers
// greater than x are x_right, build a heap using abs(x_left - x) and
// abs(x_right - x)
// 3. find  the top k smallest numbers of the heap
// O(logn + klogk)
// binary search O(logn), build a heap O(k), extract min O(klogk)
// var kClosestNumbers = function(array, k, x) {
//   var insertPosition = searchInsert(array, x);
//   var start, count = 1;
//   var candidates = [], results = [];
//   start = insertPosition - k >= 0 ? insertPosition - k : 0;
//   while(count <= 2 * k && start < array.length) {
//     if(array[start] !== x) {
//       candidates.push({key: Math.abs(array[start] - x), value: array[start]});
//       count++;
//     }
//     start++;
//   }

//   var minHeap = new MinHeap(candidates);
//   for(var i = 0; i < k; i++) {
//     results.push(minHeap.extractMin().value);
//   }
//   return results;
// }; 
// var searchInsert = function(nums, target) {  
//   var start = 0, end = nums.length - 1;
//   while(start + 1 < end) {
//     var mid = Math.floor((end - start) / 2) + start;
//     if(target <= nums[mid]) {
//       end = mid;
//     } else {
//       start = mid;
//     }
//   }    
//   if(target <= nums[start]) {
//     return start;
//   }else if(target <= nums[end]) {
//     return end;
//   } else {
//     return end + 1;
//   }
// };
// /**
//  * Implemention of Minimum Heap
//  */
// var MinHeap = function(array) {
//   this.heap = array || [];
//   this.heapSize = this.heap.length;
//   buildAMinHeap(this.heap);
// };
// MinHeap.prototype = {
//   extractMin: function() {
//     var min = this.heap[0];
//     swap(this.heap, 0, --this.heapSize);
//     minHeapSiftDown(0, this.heap, this.heapSize);
//     return min;
//   },
//   getMin: function() {
//     return this.heap[0];
//   },
//   insert: function(element) {
//     this.heap[this.heapSize] = element;
//     this.heapSize++;
//     minHeapSiftUp(this.heapSize - 1, this.heap, this.heapSize);
//   }
// };
// var buildAMinHeap = function(array) {
//   var l = array.length;
//   for(var i = Math.floor(l / 2) - 1; i >= 0; i--) {
//       minHeapSiftDown(i, array, array.length);
//   }
// };
// var minHeapSiftDown = function(i, array, heapSize) {
//   var left = getLeftChild(i);
//   var right = getRightChild(i);
//   var smallest = i;
//   if(left < heapSize && array[left].key < array[i].key) {
//     smallest = left;
//   }
//   if(right < heapSize && array[right].key < array[smallest].key) {
//     smallest = right;
//   }    
//   if(smallest !== i) {
//     swap(array, i, smallest);
//     minHeapSiftDown(smallest, array, heapSize);
//   }
// };
// var minHeapSiftUp = function(i, array) {
//   var parent = getParent(i);
//   if(parent >= 0 && array[parent].key < array[i].key) {
//     smallest = parent;
//   } else {
//     smallest = i;
//   }   
//   if(smallest !== parent && parent >= 0) {
//     swap(array, parent, smallest);
//     minHeapSiftUp(parent, array);
//   }
// }

// var getLeftChild = function(i) {
//   return 2 * i + 1;
// };
// var getRightChild = function(i) {
//   return 2 * i + 2;
// };
// var getParent = function(i) {
//   return Math.floor((i - 1)/2);  
// };
// var getSibling = function(i) {
//   var parent = getParent(i);
//   var left = getLeftChild(parent);
//   var right = getRightChild(parent);

//   if(i === left) {
//     return right;
//   }
//   if(i === right) {
//     return left;
//   } 
// };
// var swap = function(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp; 
// };

// Version 2: direct comparison
// O(logn + k)
// binary search O(logn), direct comparison O(k)
var kClosestNumbers = function(array, k, x) {
  var insertPosition = searchInsert(array, x);
  var left = insertPosition - 1, right = insertPosition;
  var count = 1, results = [];
  if(array[insertPosition] === x) {
    right++;
  }
  while(left >= 0 && right < array.length && count <= k) {
    if(x - array[left] < array[right] - x) {
      results.push(array[left--]);
    } else {
      results.push(array[right++]);
    }
    count++;
  }

  while(left >= 0 && count <= k) {
    results.push(array[left--]);
    count++;
  }
  while(right < array.length && count <= k) {
    results.push(array[right++]);
    count++;
  }  
  return results;
}; 
var searchInsert = function(nums, target) {  
  var start = 0, end = nums.length - 1;
  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(target <= nums[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }    
  if(target <= nums[start]) {
    return start;
  }else if(target <= nums[end]) {
    return end;
  } else {
    return end + 1;
  }
};
var array = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56];
console.log(kClosestNumbers(array, 4, 35)); //[ 39, 30, 42, 45 ]