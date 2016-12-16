/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1, end = n;
        while(start + 1 < end) {
          var mid = Math.floor((end - start) / 2) + start;
          if(isBadVersion(mid)) {
            end = mid;
          } else {
            start = mid;
          }
        }
        return isBadVersion(start) ? start : end;
    };
};

var isBadVersion = function(n) {
  return nums[n - 1];
};
var nums = [0,0,1];
console.log(solution(isBadVersion)(nums.length)); // 3

var nums = [0,1,1];
console.log(solution(isBadVersion)(nums.length)); // 2

var nums = [1,1,1];
console.log(solution(isBadVersion)(nums.length)); // 1

