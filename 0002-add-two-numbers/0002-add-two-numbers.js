/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode();
    var temp = head;
    var prev = temp;
    var carry = 0;
    while (l1 !== null && l2 !== null) {
        var val = l1.val + l2.val + carry;
        temp.val = val % 10;
        carry = val >= 10 ? 1 : 0;
        temp.next = new ListNode();
        prev = temp;
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 !== null || l2 !== null) {
        val = l1 === null ? l2.val + carry : l1.val + carry;
        temp.val = val % 10;
        carry = val >= 10 ? 1 : 0;
        temp.next = new ListNode();
        prev = temp;
        temp = temp.next;
        if (l1 === null) {
            l2 = l2.next;
        } else {
            l1 = l1.next;
        }
    }
    if (carry === 1) {
        temp.val = 1;
    }
    if (temp.val === 0) {
        prev.next = null;
    }
    return head;
};