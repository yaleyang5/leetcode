/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function TrieNode() {
    this.children = {};
    this.isWord = false;
    this.addWord = (word) => {
        var temp = this;
        for (var i = 0; i < word.length; i++) {
            if (temp.children[word[i]] === undefined) {
                temp.children[word[i]] = new TrieNode();
            }
            temp = temp.children[word[i]];
        }
        temp.isWord = true;
    }
}

var findWords = function(board, words) {
    var root = new TrieNode();
    for (var i = 0; i < words.length; i++) {
        root.addWord(words[i]);
    }
    var rows = board.length;
    var cols = board[0].length;
    
    var result = new Set();
    var visit = new Set();
    
    var dfs = (r, c, node, word) => {
        if (r < 0 || c < 0 || r === rows || c === cols || visit.has(String(r) + ',' + String(c)) || node.children[board[r][c]] === undefined) {
            return;
        }
        visit.add(String(r) + ',' + String(c));
        
        node = node.children[board[r][c]];
        word += board[r][c];
        if (node.isWord) {
            result.add(word);
        }
        
        dfs(r - 1, c, node, word);
        dfs(r + 1, c, node, word);
        dfs(r, c + 1, node, word);
        dfs(r, c - 1, node, word);
        
        visit.delete(String(r) + ',' + String(c));
    }
    
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            dfs(r, c, root, '');
        }
    }
    
    
    return Array.from(result);
};