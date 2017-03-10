/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var l = nums1.length + nums2.length;
  if(l % 2 === 0) {
    var value1 = findKthElementSortedArrays(nums1, 0, nums2, 0, l/2);
    var value2 = findKthElementSortedArrays(nums1, 0, nums2, 0, l/2 + 1);
    return (value1 + value2) / 2;
  } else {
    return findKthElementSortedArrays(nums1, 0, nums2, 0, (l + 1)/2);
  }
};

var findKthElementSortedArrays = function(nums1, s1, nums2, s2, k) {
  if(s1 >= nums1.length) {
    return nums2[s2 + k - 1];
  }
  if(s2 >= nums2.length) {
    return nums1[s1 + k - 1];
  }  
  if(k === 1) {
    return nums1[s1] < nums2[s2] ? nums1[s1] : nums2[s2];
  }

  var n1 = nums1.length - s1;
  var n2 = nums2.length - s2;
  var halfIndex1 = s1 + Math.floor(k/2) - 1;
  var halfIndex2 = s2 + Math.floor(k/2) - 1;

  if(n1 < Math.floor(k/2) || nums1[halfIndex1] > nums2[halfIndex2]) {
    return findKthElementSortedArrays(nums1, s1, nums2, halfIndex2 + 1, k - Math.floor(k/2));
  }
  if(n2 < Math.floor(k/2) || nums1[halfIndex1] <= nums2[halfIndex2]) {
    return findKthElementSortedArrays(nums1, halfIndex1 + 1, nums2, s2, k - Math.floor(k/2)); 
  }
};

nums1 = [1, 3];
nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // 2

nums1 = [1, 2];
nums2 = [1, 1];
console.log(findMedianSortedArrays(nums1, nums2)); // 1