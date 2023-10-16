/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 1) {
        return dividend;
    }
    if (divisor === -1) {
        return dividend === -2147483648 ? 2147483647 : -dividend;
    }
    var neg = dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (divisor > dividend) {
        return 0;
    }
    if (divisor === dividend) {
        return neg ? -1 : 1;
    }
    var count = 0;
    for (var i = 0; i < dividend; i += divisor) {
        count++;
    }
    if (count > 2147483647) {
        return neg ? -2147483648 : 2147483647;
    }
    if (i === dividend) {
        return neg ? -count : count;
    }
    return neg ? -(count - 1) : count - 1;
};