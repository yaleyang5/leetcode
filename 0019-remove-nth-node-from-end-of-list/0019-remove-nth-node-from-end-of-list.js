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
    if (head === null || head.next === null) {
        return null;
    }
    if (head.next.next === null) {
        if (n === 1) {
            head.next = null;
            return head;
        } else {
            return head.next;
        }
    }
    var l = head;
    var r = head;
    for (var i = 0; i < n; i++) {
        r = r.next;
    }
    if (r === null) {
        return head.next;
    }
    while (r.next !== null) {
        l = l.next;
        r = r.next;
    }
    l.next = l.next.next;
    return head;
};