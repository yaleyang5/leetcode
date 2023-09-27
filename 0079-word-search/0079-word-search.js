/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length
    var n = board[0].length;
    var path = {};
    
    var dfs = (r, c, i) => {
        if (i === word.length) {
            return true;
        }
        var currPair = String(r) + ',' + String(c);
        if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== word[i] || path[currPair] === 1) {
            return false;
        }
        path[currPair] = 1;
        var res = (dfs(r + 1, c, i + 1) ||
                  dfs(r - 1, c, i + 1) ||
                  dfs(r, c + 1, i + 1) ||
                  dfs(r, c - 1, i + 1));
        path[currPair] = 0;
        return res;
    }
    
    for (var i = 0; i < m * n; i++) {
        var x = Math.floor(i / n);
        var y = i % n;
        if (dfs(x, y, 0)) {
            return true;
        }
    }
    return false;
};