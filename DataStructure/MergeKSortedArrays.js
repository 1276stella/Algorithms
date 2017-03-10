// Version 1: divide and conquer
var mergeKSortedArrays_v1 = function(arrays) {
  var mergeKSortedArraysHelper = function(arrays, start, end) {
    var k = end - start + 1;
    if(k === 0) {
      return [];
    }
    if(k === 1) {
      return arrays[start];
    }
    if(k === 2) {
      return mergeTwoSortedArrays(arrays[start], arrays[end]);
    }

    var mergedArray1 = mergeKSortedArraysHelper(arrays, start, start + Math.floor(k / 2) - 1);
    var mergedArray2 = mergeKSortedArraysHelper(arrays, start + Math.floor(k / 2), end);
    return mergeTwoSortedArrays(mergedArray1, mergedArray2);
  }
  return mergeKSortedArraysHelper(arrays, 0, arrays.length - 1);
};

var mergeTwoSortedArrays = function(array1, array2) {
  var i = 0, j = 0, array = [];
  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      array.push(array1[i]);
      i++;
    } else {
      array.push(array2[j]);
      j++;      
    }
  }
  while(i < array1.length) {
    array.push(array1[i]);
    i++;
  }  
  while(j < array2.length) {
    array.push(array2[j]);
    j++;
  }  
  return array;  
};


// version 2: bottom up, merge from bottom to up
var mergeKSortedArrays_v2 = function(arrays) {
  var mergedArrays = arrays.slice();
  while(mergedArrays.length > 1) {
    var tempArray = [];
    var k = mergedArrays.length;
    for(var i = 0; i < k - 1; i = i + 2) {
      tempArray.push(mergeTwoSortedArrays(mergedArrays[i], mergedArrays[i + 1]));
    }
    if(k % 2 === 1) {
      tempArray.push(mergedArrays[k - 1]); 
    }     
    mergedArrays = tempArray;
  }
  return mergedArrays[0];
};
var arrays = [[1, 3, 5, 7],
              [2, 4, 6, 8],
              [0, 9, 10, 11]] ;
console.log(mergeKSortedArrays_v1(arrays));
console.log(mergeKSortedArrays_v2(arrays));