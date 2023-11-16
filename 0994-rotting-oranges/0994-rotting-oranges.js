/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    var q = [];
    var time = 0;
    var fresh = 0;
    
    var [rows, cols] = [grid.length, grid[0].length];
    
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                fresh++;
            }
            if (grid[r][c] === 2) {
                q.push([r, c]);
            }
        }
    }
    
    var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while (q.length > 0 && fresh > 0) {
        var len = q.length;
        for (var i = 0; i < len; i++) {
            var [r, c] = q.shift();
            for (var [dr, dc] of directions) {
                var [row, col] = [dr + r, dc + c];
                if (row < 0 || row === rows || col < 0 || col === cols || grid[row][col] !== 1) {
                    continue;
                }
                grid[row][col] = 2;
                q.push([row, col]);
                fresh--;
            }
        }
        time++;
    }
    return fresh === 0 ? time : -1;
};