/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var results = [];
  var hash1 = {}, hash2 = {};
  nums1.forEach(function(num) {
    if(!(num in hash1)){
      hash1[num] = true;
    }
  })
  nums2.forEach(function(num) {
    if((num in hash1) && !(num in hash2)) {
      hash2[num] = true;
      results.push(num);
    }
  })
  return results;
};

console.log(intersection([1], [1]));