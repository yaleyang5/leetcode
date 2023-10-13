/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    var map = {};
    
    var clone = (n) => {
        if (map[n.val] !== undefined) {
            return map[n.val];
        }
        
        var copy = new Node(n.val);
        map[n.val] = copy;
        for (var neighbor of n.neighbors) {
            copy.neighbors.push(clone(neighbor));
        }
        return copy;
    }
    return node === null ? null : clone(node);
};