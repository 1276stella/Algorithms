/** 
 * @param L: Given n pieces of wood with length L[i]
 * @param k: An integer
 * return: The maximum length of the small pieces.
 */
var cutCount = function(L, woodCutLength) {
  var totalCut = 0;
  L.forEach(function(Li) {
    totalCut += Math.floor(Li / woodCutLength);
  })
  return totalCut;
}; 

var woodCut = function(L, k) {
  if(L.length === 0) {
    return 0;
  }
  var start, end, totalL, minL;
  start = 1;
  totalL = 0;
  minL = Number.MAX_SAFE_INTEGER;
  L.forEach(function(Li) {
    totalL += Li;
    if(Li < minL) {
      minL = Li;
    }
  })
  end = Math.min(Math.floor(totalL / k),  minL);

  while(start + 1 < end) {
    var mid = Math.floor((end - start) / 2) + start;
    if(cutCount(L, mid) >= k) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if(cutCount(L, end) >= k) {
    return end;
  } 
  if(cutCount(L, start) >= k) {
    return start;
  }   
  return 0;
};

var L = [232, 124, 456];
console.log(woodCut(L, 7)); // 114