class TrieNode {
    constructor(val) {
        this.end = false;
        this.next = {};
    }
};

var Trie = function() {
    this.trie = new TrieNode();
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var temp = this.trie;
    for (var i = 0; i < word.length; i++) {
        var char = word[i];
        if (temp.next[char] === undefined) {
            temp.next[char] = new TrieNode(char);
        }
        temp = temp.next[char];
    }
    temp.end = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var temp = this.trie;
    for (var i = 0; i < word.length; i++) {
        var char = word[i]
        if (temp.next[char] === undefined) {
            return false;
        }
        temp = temp.next[char];
    }
    return temp.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var temp = this.trie;
    for (var i = 0; i < prefix.length; i++) {
        var char = prefix[i]
        if (temp.next[char] === undefined) {
            return false;
        }
        temp = temp.next[char];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */