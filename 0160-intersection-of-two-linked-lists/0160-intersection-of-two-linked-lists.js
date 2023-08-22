/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var set = new Set();
    var temp = headA;
    while (temp !== null) {
        set.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (set.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};