/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length;
    var n = board[0].length;
    var set = {};
    
    var dfs = (x, y, i) => {
        if (i === word.length) {
            return true;
        }
        var curr = String(x) + "," + String(y);
        if (x < 0 || y < 0 || x >= m || y >= n || word[i] !== board[x][y] || set[curr] === 1) {
            return false;
        }
        
        set[curr] = 1;
        var res = (dfs(x + 1, y, i + 1) ||
                  dfs(x - 1, y, i + 1) ||
                  dfs(x, y + 1, i + 1) ||
                  dfs(x, y - 1, i + 1));
        set[curr] = 0;
        return res;
    }
    
    for (var x = 0; x < m; x++) {
        for (var y = 0; y < n; y++) {
            if (dfs(x, y, 0)) {
                return true;
            }
        }
    }
    return false;
};