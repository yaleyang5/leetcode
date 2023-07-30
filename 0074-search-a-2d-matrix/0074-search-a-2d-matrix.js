/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // coordinate = [index / columns, index % columns]
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    var start = 0;
    var m = matrix.length;
    var n = matrix[0].length;
    var end = m * n - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        var curr = matrix[Math.floor(mid / n)][mid % n];
        if (curr > target) {
            end = mid - 1;
        } else if (curr < target) {
            start = mid + 1;
        } else {
            return true;
        }
    }
    return false;
};