/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var diff = 0;
    var min = 2147483647;
    var max= -2147483648;
    for (var i = 0; i < prices.length; i++) {
        var curr = prices[i];
        if (min !== 2147483647) {
            diff = Math.max(diff, curr - min);
        }
        min = Math.min(min, curr);
        max = Math.max(max, curr);
    }
    return diff;
};