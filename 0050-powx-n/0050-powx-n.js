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
    if (x === 1) {
        return 1;
    }
    if (x === -1) {
        return n % 2 === 0 ? 1 : -1;
    }
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    if (n % 2 === 0) {
        return myPow(x * x, n / 2);
    } else {
        return x * myPow(x * x, (n - 1) / 2);
    }
};