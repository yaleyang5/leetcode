/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var nodes = new WeakMap();
    while (head !== null) {
        if (nodes.has(head)) {
            return true;
        }
        nodes.set(head, 1);
        head = head.next;
    }
    return false;
};