/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var col = {};
    var pos = {};
    var neg = {};
    
    var res = [];
    var board = [];
    for (var i = 0; i < n; i++) {
        var element = "";
        for (var j = 0; j < n; j++) {
            element += '.';
        }
        board.push(element);
    }
    
    var dfs = (x) => {
        if (x === n) {
            res.push(board.slice());
            return;
        }
        
        for (var y = 0; y < n; y++) {
            if (col[y] === 1 || pos[x + y] === 1 || neg[x - y] === 1) {
                continue;
            }
            
            col[y] = 1;
            pos[x + y] = 1;
            neg[x - y] = 1;
            
            var arr = board[x].split('');
            arr[y] = 'Q';
            board[x] = arr.join('');
            
            dfs(x + 1);
            
            col[y] = 0;
            pos[x + y] = 0;
            neg[x - y] = 0;
            arr[y] = '.'
            board[x] = arr.join('');
        }
    }
    
    dfs(0);
    
    return res;
};