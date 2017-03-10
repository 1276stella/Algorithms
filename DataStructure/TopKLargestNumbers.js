/*
 * @param nums an integer array
 * @param k an integer
 * @return the top k largest numbers in array
 */
// see problem at https://aaronice.gitbooks.io/lintcode/content/data_structure/top_k_largest_numbers.html
var topKLargestNumbers = function(array, k) {
  buildAHeap(array);
  var results = [];
  var l = array.length;
  for(var i = 1; i <= k; i++) {
    results.push(array[0]);
    swap(array, 0, l - i);
    maxHeapify(array, 0, l - i);
  }
  return results;
};

var buildAHeap = function(array) {
  var l = array.length;
  for(var i = Math.floor(l / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i, l);
  }
};

var maxHeapify = function(heap, i, heapSize) {
  var left = 2*i + 1;
  var right = 2*i + 2;
  var maxInd = i;
  if(left < heapSize && heap[left] > heap[maxInd]) {
    maxInd = left;
  }
  if(right < heapSize && heap[right] > heap[maxInd]) {
    maxInd = right;
  }
  if(maxInd !== i) {
    swap(heap, maxInd, i);
    maxHeapify(heap, maxInd, heapSize);
  }  
};

var swap = function(array, i, j) {
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};

var array = [3,10,1000,-99,4,100];
console.log(topKLargestNumbers(array, 3)); //