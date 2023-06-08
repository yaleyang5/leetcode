/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var x = 0;
    while (x*x <= num) {
        if (x*x === num) {
            return true;
        }
        x++;
    }
    return false;
};