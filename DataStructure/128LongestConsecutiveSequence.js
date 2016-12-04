/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length <= 1) {
    return nums.length;
  }

  // use a hash map to store current minimum and maximum boundary
  // for each element
  // e.g. [100, 4, 200, 1, 3, 2]
  // initial state of min and max boundaries of element is itself
  // hashMap[4] = {min: 4, max: 4}
  // then iterate through all elements in hashMap
  // if the element (current element - 1) next to the current element 
  // exists in hashMap, then update the min and max boundaries for 
  // corresponding elements
  // when examine 4, 3 exists in the hashMap
  // so update min boundary of 4 to 3's min boundary and 
  // max boundary of 3 to 4's max boundary
  var hashMap = {};
  nums.forEach(function(num){
    hashMap[num] = {min: num, max: num};
  })

  for(var num in hashMap){
    if(num - 1 in hashMap) {
      var minBound = hashMap[num - 1].min;
      var maxBound = hashMap[num].max;
      hashMap[minBound].max = maxBound;
      hashMap[maxBound].min = minBound;
    }
  }

  var longestConsecutiveLength = 1;
  for(var num in hashMap) {
    var length = hashMap[num].max - hashMap[num].min + 1;
    if(length > longestConsecutiveLength) {
      longestConsecutiveLength = length;
    }
  }
  return longestConsecutiveLength;
};

var array = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(array)); // 4

var array = [-6,8,-5,7,-9,-1,-7,-6,-9,-7,5,7,-1,-8,-8,-2,0];
console.log(longestConsecutive(array)); // 5