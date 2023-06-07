/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var xStr = String(x);
    for (var i = 0; i < xStr.length / 2; i++) {
        if (xStr[i] !== xStr[xStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};