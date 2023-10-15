/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    var m = board.length;
    var n = board[0].length;
    
    var dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') {
            return;
        }
        board[x][y] = 'T';
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if (board[x][y] === 'O' && (x === 0 || x === m - 1 || y === 0 || y === n - 1)) {
                dfs(x, y);
            }
        } 
    }
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if (board[x][y] === 'O') {
                board[x][y] = 'X';
            }
        }
    }
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if (board[x][y] === 'T') {
                board[x][y] = 'O';
            }
        }
    }
};