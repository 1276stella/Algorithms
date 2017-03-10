/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0;
  for(var i = 0; i < prices.length - 1; i++) {
    if(prices[i + 1] > prices[i]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;    
};