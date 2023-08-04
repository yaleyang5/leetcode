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
    // temp is the main pointer
    var temp = head;
    // prev follows temp
    var prev;
    // khead is head of current k-group
    var khead = head;
    // prev tail is tail of previous k-group
    var prevTail = null;
    while (temp !== null) {
        khead = temp;
        for (var i = 0; i < k; i++) {
            if (temp === null) {
                prevTail.next = khead;
                return head;
            }
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
        prev = khead;
        if (khead === head) {
            // first time
            prevTail = head;
            head = reverseList(head);
        } else {
            khead = reverseList(khead);
            prevTail.next = khead;
            prevTail = prev;
        }
    }
    return head;
};

var reverseList = (head) => {
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