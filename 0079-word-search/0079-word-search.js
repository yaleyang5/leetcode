/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var rows = board.length;
    var cols = board[0].length;
    
    var path = new Set();
    
    var dfs = (r, c, i) => {
        if (i === word.length) {
            return true;
        }
        if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] != board[r][c] || path.has(String(r) + ',' + String(c))) {
            return false;
        }
        path.add(String(r) + ',' + String(c));
        var res = dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);
        path.delete(String(r) + ',' + String(c))
        return res;
    }
    
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) {
                return true;
            }
        }
    }
    return false;
};