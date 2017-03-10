/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0, minInThePast = Number.MAX_SAFE_INTEGER;
  for(var i = 0; i < prices.length; i++) {
    minInThePast = Math.min(minInThePast, prices[i]);
    if(prices[i] - minInThePast > maxProfit) {
      maxProfit = prices[i] - minInThePast;
    }
  }
  return maxProfit;
};