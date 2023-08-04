/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode();
    var r = head;
    var prev = null;
    var count = 0;
    while (r !== null) {
        var first = r;
        for (var i = 0; i < k; i++) {
            if (r === null) {
                return dummy.next;
            }
            prev = r;
            r = r.next;
        }
        // at this point r is the start of the next, prev is the end of the k-group
        prev.next = null;
        prev = reverse(first);
        if (first === head) {
            dummy.next = prev;
        } else {
            head.next = prev;
        }
        head = first;
        head.next = r;
    }
    return dummy.next;
};

var reverse = (head) => {
    var prev = null;
    var curr = head;
    var next = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}