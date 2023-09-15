/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    var rots = [true, true, true, true];
    var n = mat.length;
    for (var i = 0; i < n*n; i++) {
        var x = Math.floor(i / n);
        var y = i % n;
        var t = target[x][y]
        rots[0] = rots[0] && mat[x][y] === t;
        for (var j = 1; j < 4; j++) {
            // reflect over x axis
            x = n - 1 - x;
            // reflect over y = -x
            var temp = y
            y = x;
            x = temp;
            rots[j] = rots[j] && mat[x][y] === t;
        }
    }
    return rots[0] || rots[1] || rots[2] || rots[3];
};