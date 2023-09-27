/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var n = board[0].length;
    var dfs = (path, i, wordIndex) => {
        // console.log(path, i, wordIndex);
        if (wordIndex >= word.length) {
            return false;
        }
        var u, d, l, r;
        var x = Math.floor(i /n);
        var y = i % n;
        // up: make sure it is in bounds, the next char, and not in path
        if (x - 1 >= 0 && board[x - 1][y] === word[wordIndex] && path[String(x - 1) + ',' + String(y)] !== 1) {
            if (wordIndex + 1 === word.length) {
                // if we found the last char
                return true;
            } else {
                // we need to continue
                path[String(x - 1) + ',' + String(y)] = 1;
                u = dfs(path, i - n, wordIndex + 1);
                path[String(x - 1) + ',' + String(y)] = 0;
            }
        }
        // down
        if (x + 1 < board.length && board[x + 1][y] === word[wordIndex] && path[String(x + 1) + ',' + String(y)] !== 1) {
            if (wordIndex + 1 === word.length) {
                return true;
            } else {
                path[String(x + 1) + ',' + String(y)] = 1;
                d = dfs(path, i + n, wordIndex + 1);
                path[String(x + 1) + ',' + String(y)] = 0;
            }
        }
        // left
        if (y - 1 >= 0 && board[x][y - 1] === word[wordIndex] && path[String(x) + ',' + String(y - 1)] !== 1) {
            if (wordIndex + 1 === word.length) {
                return true;
            } else {
                path[String(x) + ',' + String(y - 1)] = 1;
                l = dfs(path, i - 1, wordIndex + 1);
                path[String(x) + ',' + String(y - 1)] = 0;
            }
        }
        // right
        if (y + 1 < n && board[x][y + 1] === word[wordIndex] && path[String(x) + ',' + String(y + 1)] !== 1) {
            if (wordIndex + 1 === word.length) {
                return true;
            } else {
                path[String(x) + ',' + String(y + 1)] = 1;
                r = dfs(path, i + 1, wordIndex + 1);
                path[String(x) + ',' + String(y + 1)] = 0;
            }
        }
        return u || d || l || r;
    }
    for (var i = 0; i < board.length * n; i++) {
        var x = Math.floor(i / n);
        var y = i % n;
        if (board[x][y] === word[0]) {
            if (word.length === 1) {
                return true;
            }
            var path = {};
            path[String(x) + ',' + String(y)] = 1;
            if (dfs(path, i, 1)) {
                return true;
            }
        }
    }
    return false;
};