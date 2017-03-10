/**
 * @param A: Given an integer array
 * @return: void
 */
var heapify = function(array) {
  buildAMinHeap(array);
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

var getLeftChild = function(i) {
  return 2 * i + 1;
};
var getRightChild = function(i) {
  return 2 * i + 2;
};
var swap = function(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
};
var array = [3,2,1,4,5];
heapify(array);
console.log(array);