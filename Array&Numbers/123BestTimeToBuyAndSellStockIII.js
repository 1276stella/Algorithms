/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfit = 0, minInThePast = Number.MAX_SAFE_INTEGER;
  var maxProfitFromLeft = [];
  for(var i = 0; i < prices.length; i++) {
    minInThePast = Math.min(minInThePast, prices[i]);
    if(prices[i] - minInThePast > maxProfit) {
      maxProfit = prices[i] - minInThePast;
    }
    maxProfitFromLeft[i] = maxProfit;
  }

  maxProfit = 0, maxInTheFuture = Number.MIN_SAFE_INTEGER;
  var maxProfitFromRight = [];
  for(var i = prices.length - 1; i >= 0; i--) {
    maxInTheFuture = Math.max(maxInTheFuture, prices[i]);
    if(maxInTheFuture - prices[i] > maxProfit) {
      maxProfit = maxInTheFuture - prices[i];
    }
    maxProfitFromRight[i] = maxProfit;
  }  

  console.log(maxProfitFromLeft,maxProfitFromRight);

  maxProfit = 0;
  for(var i = 0; i < prices.length; i++) {
    if(maxProfitFromLeft[i] + maxProfitFromRight[i] > maxProfit) {
      maxProfit = maxProfitFromLeft[i] + maxProfitFromRight[i];
    }
  }
  return maxProfit;    
};

var prices = [1,2,4,2,5,7,2,4,9,0];
console.log(maxProfit(prices));

var prices = [1,2];
console.log(maxProfit(prices));