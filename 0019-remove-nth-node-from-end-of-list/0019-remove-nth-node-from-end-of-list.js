/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // len === 1
    if (head.next === null) {
        return null;
    }
    // len === 2
    if (head.next.next === null) {
        if (n === 1) {
            head.next = null;
            return head;
        } else {
            return head.next;
        }
    }
    // len >= 3
    var first = head;
    var last = head;
    for (var i = 0; i < n; i++) {
        last = last.next;
    }
    if (last === null) {
        // len === n
        return head.next;
    }
    last = last.next;
    // two pointers n away from each other
    // when first one reaches null, remove node that is being pointed to
    while (last !== null) {
        first = first.next;
        last = last.next;
    }
    var second = first.next;
    first.next = second.next;
    return head;
};