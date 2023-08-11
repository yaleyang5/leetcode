class WordNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}
var WordDictionary = function() {
    this.trie = new WordNode();
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    var temp = this.trie;
    
    for (var char of word) {
        if (temp.children[char] === undefined) {
            temp.children[char] = new WordNode();
        }
        temp = temp.children[char];
    }
    temp.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    var dfs = (j, root) => {
        var temp = root;
        for (var i = j; i < word.length; i++) {
            var char = word[i];

            if (char === '.') {
                for (var child of Object.values(temp.children)) {
                    if (dfs(i + 1, child)) {
                        return true;
                    }
                }
                return false
            } else {
                if (temp.children[char] === undefined) {
                    return false;
                }
                temp = temp.children[char];
            }
        }
        return temp.end;
    }
    return dfs(0, this.trie);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */