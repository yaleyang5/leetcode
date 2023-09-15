/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    var rot0 = true;
    var rot1 = true;
    var rot2 = true;
    var rot3 = true;
    var n = mat.length;
    for (var i = 0; i < n*n; i++) {
        var x = Math.floor(i / n);
        var y = i % n;
        var t = target[x][y]
        rot0 = rot0 && mat[x][y] === t;
        [x, y] = rotate(x, y, n);
        rot1 = rot1 && mat[x][y] === t;
        [x, y] = rotate(x, y, n);
        rot2 = rot2 && mat[x][y] === t;
        [x, y] = rotate(x, y, n);
        rot3 = rot3 && mat[x][y] === t;
    }
    return rot0 || rot1 || rot2 || rot3;
};

var rotate = (x, y, n) => {
     // reflect over x axis
    x = n - 1 - x;
    // reflect over y = -x
    var temp = y
    y = x;
    x = temp;
    return [x, y];
}