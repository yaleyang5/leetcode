class Node {
    constructor(key, value, prev, next) {
        this.key = key;
        this.val = value;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = {};
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.size = 0;
    
    this.left.next = this.right;
    this.right.prev = this.left;
    return this;
};

var insert = (cache, node) => {
    var next = cache.right;
    var prev = cache.right.prev;
    node.next = next;
    node.prev = prev;
    prev.next = node;
    next.prev = node;
    cache.size++;
}

var remove = (cache, node) => {
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;
    cache.size--;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache[key] === undefined) {
        return -1;
    }
    remove(this, this.cache[key]);
    insert(this, this.cache[key]);
    return this.cache[key].val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache[key] !== undefined) {
        remove(this, this.cache[key]);
    }
    var node = new Node(key, value);
    this.cache[key] = node;
    insert(this, node);
    if (this.size > this.cap) {
        var lru = this.left.next;
        remove(this, lru);
        delete this.cache[lru.key];
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */