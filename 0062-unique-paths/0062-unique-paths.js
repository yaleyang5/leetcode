/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (m === 1 || n === 1) {
        return 1;
    }
    if (m === 2) {
        return n;
    }
    if (n === 2) {
        return m;
    }
    // console.log(m, n);
    // if (m or n is 2, it is the other)
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};