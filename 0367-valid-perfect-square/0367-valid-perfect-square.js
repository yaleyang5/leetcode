/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num <= 1) {
        return true;
    }
    var start = 0;
    var end = num / 2;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};