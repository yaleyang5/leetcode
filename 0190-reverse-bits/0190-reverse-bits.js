/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var nStr = (n >>> 0).toString(2);
    var remainder = 32 - nStr.length
    for (var i = 0; i < remainder; i++) {
        nStr = '0' + nStr;
    }
    var result = 0;
    for (var i = 0; i < 32; i++) {
        result += Number(nStr[31 - i]) * Math.pow(2, 31 - i);
    }
    return result;
};

