/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head === null ? null : head;
    }
    var prev = new ListNode(0, head);
    var result = prev;
    var curr = head;
    while (curr !== null) {
        var next = curr.next;
        if (next === null) {
            prev.next = curr;
            break;
        }
        curr.next = next.next;
        next.next = curr;
        prev.next = next;
        prev = curr;
        curr = curr.next;
    }
    
    return result.next;
};