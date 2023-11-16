/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // iterate through grid and mark where every fresh orange is
    var freshOranges = new Set();
    for (var x = 0; x < grid.length; x++) {
        for (var y = 0; y < grid[0].length; y++) {
            if (grid[x][y] === 1) {
                freshOranges.add(String(x) + ',' + String(y));
            }
        }
    }
    var minutes = 0;
    var rotOranges = (r, c) => {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === 0 || grid[r][c] === 2 || grid[r][c] === 3) {
            return;
        } else {
            freshOranges.delete(String(r) + ',' + String(c))
            grid[r][c] = 3;
        }
    }
    var count = freshOranges.size;
    // iterate constantly until freshOranges.size === 0
    while (count >= 0 && freshOranges.size > 0) {
        // turn freshly rotten oranges into 3
        for (var x = 0; x < grid.length; x++) {
            for (var y = 0; y < grid[0].length; y++) {
                if (grid[x][y] === 2) {
                    rotOranges(x + 1, y);
                    rotOranges(x - 1, y);
                    rotOranges(x, y + 1);
                    rotOranges(x, y - 1);
                }
            }
        }
        // change 3s to 2s
        for (var x = 0; x < grid.length; x++) {
            for (var y = 0; y < grid[0].length; y++) {
                if (grid[x][y] === 3) {
                    grid[x][y] = 2;
                }
            }
        }
        minutes++;
        count--;
    }
    return count < 0 ? -1 : minutes;
};

