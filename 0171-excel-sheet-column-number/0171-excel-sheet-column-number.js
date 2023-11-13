/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    var sum = 0;
    for (var i = columnTitle.length - 1; i >= 0; i--) {
        sum += (columnTitle[i].charCodeAt(0) - 64) * Math.pow(26, columnTitle.length - i - 1);
    }
    return sum;
};