/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length;
    var n = board[0].length;
    
    var set = {};
    
    var dfs = (x, y, wordIndex) => {
        // console.log(x, y, word.substring(0, wordIndex), set)
        var curr = String(x) + "," + String(y);
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[wordIndex] || set[curr] === 1) {
            
            return false;
        }
        if (wordIndex === word.length - 1 && board[x][y] === word[wordIndex]) {
            return true;
        }
        set[curr] = 1;
        if (dfs(x + 1, y, wordIndex + 1) ||
            dfs(x - 1, y, wordIndex + 1) ||
            dfs(x, y + 1, wordIndex + 1) ||
            dfs(x, y - 1, wordIndex + 1)) {
            return true;
        } else {
            set[curr] = 0;
            return false;
        }
    }
    
    for (var i = 0; i < m * n; i++) {
        set = {};
        var x = Math.floor(i / n);
        var y = i % n;
        if (dfs(x, y, 0)) {
            return true;
        }
    }
    return false;
};