/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // reflect over x axis
    var n = matrix.length;
    if (n === 0) {
        return;
    }
    for (var i = 0; i < (n * n) / 2; i++) {
        var x = Math.floor(i/n);
        var y = i % n;
        var temp = matrix[x][y];
        matrix[x][y] = matrix[n - 1 - x][y];
        matrix[n - 1 - x][y] = temp;
    }
    // console.log(matrix);
    // reflect over y = -x
    for (var i = 0; i < n * n; i++) {
        x = Math.floor(i/n);
        y = i % n;
        if (x <= y) {
            continue;
        }
        temp = matrix[x][y];
        matrix[x][y] = matrix[y][x];
        matrix[y][x] = temp;
    }
};