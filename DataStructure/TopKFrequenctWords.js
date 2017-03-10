/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// create hash: O(n)
// convert hash to array: O(n)
// build a heap: O(n)
// get top k: O(klogn) 
var topKFrequent = function(words, k) {
  var frequecy = {}, frequecyArray = [];
  for(var i = 0; i < words.length; i++) {
    if(words[i] in frequecy) {
      frequecy[words[i]]++;
    } else {
      frequecy[words[i]] = 1;
    }
  }
  console.log(frequecy)
  for(var word in frequecy) {
    frequecyArray.push([word, frequecy[word]]);
  }
  buildAHeap(frequecyArray);
  var results = [];
  var l = frequecyArray.length;
  for(var i = 1; i <= k; i++) {
    results.push(frequecyArray[0][0]);
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
  if(left < heapSize && (heap[left][1] > heap[maxInd][1] ||
    heap[left][1] === heap[maxInd][1] && heap[left][0] < heap[maxInd][0])) {
    maxInd = left;
  }
  if(right < heapSize && (heap[right][1] > heap[maxInd][1] ||
    heap[right][1] === heap[maxInd][1] && heap[right][0] < heap[maxInd][0])) {
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

var words = [ "yes", "lint", "code",
"yes", "code", "baby",
"you", "baby", "chrome",
"safari", "lint", "code",
"body", "lint", "code",
"love","love","love" ];
console.log(topKFrequent(words, 2));