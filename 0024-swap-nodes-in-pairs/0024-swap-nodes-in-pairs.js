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
    var temp = head;
    var next = head.next;
    head = next;
    while (temp !== null && next !== null && next.next !== null) {
        prev.next = next;
        temp.next = next.next;
        next.next = temp;
        prev = temp;
        temp = temp.next;
        next = temp.next;
    }
    prev.next = temp;
    if (next !== null) {
        prev.next = next;
        next.next = temp;
    }
    temp.next = null;
    return head;
};