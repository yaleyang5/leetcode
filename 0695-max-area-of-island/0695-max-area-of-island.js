/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    
    var max = 0;
    
    var dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0 || grid[x][y] === 5) {
            return 0;
        }
        // count the current tile as visited and continue checking
        grid[x][y] = 5;
        return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
        
    }
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if (grid[x][y] === 1) {
                max = Math.max(dfs(x, y), max);
            }
        }
    }
    return max;
};