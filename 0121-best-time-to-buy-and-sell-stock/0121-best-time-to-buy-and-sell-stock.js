/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // walk through once:
    // create min, max, and diff variables
    // min starts at prices[0], max starts at 0
    var min = prices[0];
    var max = 0;
    var diff = 0;
    // keep reducing min until larger num found - if so, set max and diff
    // look in this order: 
        // min? update min, clear max.
        // max? update diff
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = prices[i];
            diff = Math.max(max - min, diff);
        }
    }
    return diff;
};