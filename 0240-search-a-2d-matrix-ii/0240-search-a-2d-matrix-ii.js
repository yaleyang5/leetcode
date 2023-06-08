/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // go right until we reach something > target
    var maxColumn = 0;
    for (var i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === target) {
            return true;
        }
        if (matrix[0][i] > target) {
            maxColumn = i - 1;
            break;
        }
    }
    // console.log(maxColumn);
    if (maxColumn === -1) {
        return false;
    } else if (maxColumn === 0) {
        maxColumn = matrix[0].length - 1;
    }
    // go down until we reach something > target, go back if not found until every row touched
    for (var j = maxColumn; j >= 0; j--) {
        for (var k = 0; k < matrix.length; k++) {
            // console.log(j, k);
            if (matrix[k][j] === target) {
                return true;
            }
            if (matrix[k][j] > target) {
                break;
            }
        }
    }
    return false;
};