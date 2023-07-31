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
var reverseList = function(head) {
    // two pointers: fast and slow
    if (head === null || undefined) {
        return null;
    }
    if (head.next === null) {
        return head;
    }
    var slow = head;
    var fast = head.next;
    head.next = null;
    while (fast !== null) {
        var temp = fast.next;
        fast.next = slow;
        slow = fast;
        fast = temp;
    }
    return slow;
};