/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    var m = heights.length;
    var n = heights[0].length;
    var pacific = {};
    var atlantic = {};
    
    var dfs = (x, y, visited, prevHeight) => {
        if (visited[x * n + y] === 1 || x < 0 || y < 0 || x >= m || y >= n || heights[x][y] < prevHeight) {
            return;
        }
        visited[x * n + y] = 1;
        dfs(x + 1, y, visited, heights[x][y]);
        dfs(x - 1, y, visited, heights[x][y]);
        dfs(x, y + 1, visited, heights[x][y]);
        dfs(x, y - 1, visited, heights[x][y]);
    }
    
    for (var i = 0; i < n; i++) {
        dfs(0, i, pacific, heights[0][i]);
        dfs(m - 1, i, atlantic, heights[m - 1][i]);
    }
    
    for (var j = 0; j < m; j++) {
        dfs(j, 0, pacific, heights[j][0]);
        dfs(j, n - 1, atlantic, heights[j][n - 1]);
    }
    
    var res = [];
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if (pacific[x * n + y] === 1 && atlantic[x * n + y] === 1) {
                res.push([x, y]);
            }
        }
    }
    return res;
};