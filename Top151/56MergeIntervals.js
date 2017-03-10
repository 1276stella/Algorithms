/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
// version 1: O(n), where n is the length of intervals
// use newInterval to maintain currently merged interval.
// once newInterval does not have an overlap with interval[i + 1]
// push newInterval to result and newInterval = interval[i + 1]
var merge = function(intervals) {
  if(intervals.length === 0) {
    return intervals;
  }  
  intervals.sort(function(i1, i2) {
    return i1.start - i2.start;
  });  
  var results = [];
  var newInterval = intervals[0];
  var i = 1, l = intervals.length;
  while(i < l) {
    if(i + 1 < l && intervals[i + 1].start <= newInterval.end) {
      newInterval.end = Math.max(newInterval.end, intervals[i + 1].end);
    } else {
      results.push(newInterval);
      newInterval = intervals[i + 1];
    }
    i++;
  }
  return results;
}; 
// var merge = function(intervals) {
//   if(intervals.length === 0) {
//     return intervals;
//   }
//   intervals.sort(function(i1, i2) {
//     return i1.start - i2.start;
//   });
//   var results = [];
//   intervals.forEach(function(interval1) {
//     var overlapped = false;
//     results.forEach(function(interval2) {
//       if(ifOverlapped(interval1, interval2)) {
//         interval2.start = Math.min(interval1.start, interval2.start);
//         interval2.end = Math.max(interval1.end, interval2.end);
//         interval1 = interval2;
//         overlapped = true;
//       }
//     });
//     if(!overlapped) {
//       results.push(interval1);
//     }
//   });  
//   return results;
// };

// var ifOverlapped = function(i1, i2) {
//   return i1.start >= i2.start && i1.start <= i2.end
//       || i2.start >= i1.start && i2.start <= i1.end
// };

// Definition for an interval.
function Interval(start, end) {
    this.start = start;
    this.end = end;
};

var intervals = [];
var i1 = new Interval(1, 3);
intervals.push(i1);
var i2 = new Interval(2, 6); 
intervals.push(i2);
var i3 = new Interval(8, 10); 
intervals.push(i3);
var i4 = new Interval(15, 18); 
intervals.push(i4);
console.log(merge(intervals));

var intervals = [];
var i1 = new Interval(1, 3);
intervals.push(i1);
var i2 = new Interval(8, 10); 
intervals.push(i2);
var i3 = new Interval(2, 9); 
intervals.push(i3);
var i4 = new Interval(15, 18); 
intervals.push(i4);
console.log(merge(intervals));