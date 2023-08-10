
var Trie = function() {
    this.trie = [];
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.trie.push(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.trie.includes(word);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var len = prefix.length;
    var startsWithPrefix = (word) => (prefix === word.substring(0, len));
    return this.trie.findIndex(startsWithPrefix) !== -1;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */