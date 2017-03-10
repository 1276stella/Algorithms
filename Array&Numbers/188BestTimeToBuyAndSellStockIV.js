/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// version 1
var maxProfit_v1 = function(k, prices) {
  if(prices.length <= 1) {
    return 0;
  }
  // if k is large enough, the algorithm for unlimited times of transcations
  // can be used to avoid TLE on Leetcode
  if(k >= prices.length / 2) {
    var maxProfit = 0;
    for(var i = 0; i < prices.length - 1; i++) {
      if(prices[i + 1] > prices[i]) {
        maxProfit += prices[i + 1] - prices[i];
      }
    }
    return maxProfit;     
  }

  // mustSell[i][j]: the max profit earned on the ith day with at most j transactions and on the ith day, user must sell the stock
  // globalBest[i][j]: the max profit earned on the ith day with at most j transactions. User could sell or not sell the stock on
  // the ith day
  var mustSell = [], globalBest = [];
  for(var i = 0; i <= prices.length; i++) {
    mustSell[i] = [0];
    globalBest[i] = [0];
  }
  for(var j = 0; j <= k; j++) {
    mustSell[0][j] = 0;
    globalBest[0][j] = 0;
  }  
  for(var i = 1; i <= prices.length; i++) {
    for(var j = 1; j <= k; j++) {
      var diff = prices[i] - prices[i - 1];
      // if user has to sell the stock on ith day, which is the jth transcation, then it can be obtained by either
      // globalBest[i - 1][j - 1] and the user buy the stock before the ith day and sell it on the ith day
      // or
      // mustSell[i - 1][j] + diff. We can understand this as instead of the user selling the stock on (i-1)th day, he
      // holds the stock and sell it on the ith day, so it still costs at most j transactions. 
      mustSell[i][j] = Math.max(globalBest[i - 1][j - 1] + diff, mustSell[i - 1][j] + diff);
      globalBest[i][j] = Math.max(globalBest[i - 1][j], mustSell[i][j]);
    }
  }  
  return globalBest[prices.length - 1][k];
}; 
// version 2: 
// f[i][j]: max profit of the first i elements in prices using j transactions 
var maxProfit_v2 = function(k, prices) {
  var maxProfit = getMaxProfitForOneTranscation(prices);
  if(k >= prices.length / 2) {
    return maxProfitForUnlimitedTranscations(prices);
  }
  var f = [];
  for(var i = 0; i <= prices.length; i++) {
    f[i] = [0];
  }
  var currentMax = 0;
  for(var i = 1; i <= prices.length; i++) {
    for(var j = 1; j <= k; j++) {
      f[0][j] = 0;
      var temp = Number.MIN_SAFE_INTEGER;
      for(var p = j - 1; p <= i - 1; p++) {
        temp = Math.max(f[p][j - 1] + maxProfit[p][i - 1], temp);
      }
      f[i][j] = temp;
      if(f[i][j] > currentMax) {
        currentMax = f[i][j];
      }
    } 
  }
  return currentMax;
};

var getMaxProfitForOneTranscation = function(prices) {
  var maxProfit = [];
  for(var i = 0; i < prices.length; i++) {
    maxProfit[i] = [];
    var maxPrice = prices[i];
    for(var j = i; j < prices.length; j++) {
      maxPrice = Math.max(prices[j], maxPrice);
      maxProfit[i][j] = maxPrice - prices[i];
    }
  }
  return maxProfit;
};

var maxProfitForUnlimitedTranscations = function(prices) {
  var maxProfit = 0;
  for(var i = 0; i < prices.length - 1; i++) {
    if(prices[i + 1] > prices[i]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;    
};

console.log(maxProfit_v1(3, [1,5,9,3,4,7])); //12