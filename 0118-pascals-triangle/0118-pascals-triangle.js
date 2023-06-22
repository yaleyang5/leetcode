/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows < 1) {
        return [];
    }
    var triangle = [[1]];
    var previous = [1];
    for (var i = 1; i < numRows; i++) {
        var row = [];
        for (var j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(previous[j - 1] + previous[j]);
            }
        }
        // console.log(i, previous, row);
        previous = row;
        triangle.push(row);
    }
    return triangle;
};