/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    var oldToNew = new WeakMap();
    
    var curr = head;
    while (curr !== null) {
        var copy = new Node(curr.val);
        oldToNew.set(curr, copy);
        curr = curr.next;
    }
    
    curr = head;
    
    while (curr !== null) {
        copy = oldToNew.get(curr);
        copy.next = curr.next === null ? null : oldToNew.get(curr.next);
        copy.random = curr.random === null ? null : oldToNew.get(curr.random);
        curr = curr.next;
    }
    return oldToNew.get(head);
};