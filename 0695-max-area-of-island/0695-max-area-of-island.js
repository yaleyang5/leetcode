/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    
    var max = 0;
    var visited = {};
    
    var dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0 || visited[x * n + y] !== undefined) {
            return 0;
        }
        // count the current tile as visited and continue checking
        visited[x * n + y] = 1;
        return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
        
    }
    
    for (var i = 0; i < m * n; i++) {
        var x = Math.floor(i / n);
        var y = i % n;
        if (grid[x][y] === 1 && visited[i] === undefined) {
            max = Math.max(dfs(x, y), max);
        }
    }
    return max;
};