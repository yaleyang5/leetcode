/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var count = 0;
    var visited = {};
    
    var claimIsland = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0' || visited[x * n + y] === 1) {
            return;
        }
        visited[x * n + y] = 1;
        claimIsland(x + 1, y);
        claimIsland(x - 1, y);
        claimIsland(x, y + 1);
        claimIsland(x, y - 1);
    }
    
    for (var i = 0; i < m * n; i++) {
        var x = Math.floor(i / n);
        var y = i % n;
        if (visited[i] === undefined && grid[x][y] === '1') {
            count++;
            claimIsland(x, y);
        }
    }
    return count;
};