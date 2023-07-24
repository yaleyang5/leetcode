/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x === 0) {
        return 0;
    }
    if (n === 0 || x === 1) {
        return 1;
    }
    if (x === -1) {
        return n % 2 === 0 ? 1 : -1;
    }
    var pow = 1;
    for (var i = 0; i < Math.abs(n); i++) {
        pow *= x;
    }
    return n < 0 ? 1 / pow : pow;
};