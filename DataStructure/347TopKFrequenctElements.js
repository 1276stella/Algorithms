/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var frequecy = {}, frequecyArray = [];
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] in frequecy) {
      frequecy[nums[i]]++;
    } else {
      frequecy[nums[i]] = 1;
    }
  }
  for(var num in frequecy) {
    frequecyArray.push([num, frequecy[num]]);
  }
  buildAHeap(frequecyArray);
  var results = [];
  var l = frequecyArray.length;
  for(var i = 1; i <= k; i++) {
    results.push(+frequecyArray[0][0]);
    swap(frequecyArray, 0, l - i);
    maxHeapify(frequecyArray, 0, l - i);
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
  if(left < heapSize && heap[left][1] > heap[maxInd][1]) {
    maxInd = left;
  }
  if(right < heapSize && heap[right][1] > heap[maxInd][1]) {
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

var nums = [1,1,1,2,2,3];
console.log(topKFrequent(nums, 2));