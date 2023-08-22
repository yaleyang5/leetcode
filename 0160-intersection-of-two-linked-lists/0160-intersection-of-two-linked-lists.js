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
    var setA = new Set();
    var setB = new Set();
    while (headA !== null && headB !== null) {
        setA.add(headA);
        setB.add(headB);
        if (setA.has(headB) || setB.has(headA)) {
            return setA.has(headB) ? headB : headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    if (headB === null) {
        while (headA !== null) {
            if (setB.has(headA)) {
                return headA;
            }
            headA = headA.next;
        }
    }
    if (headA === null) {
        while (headB !== null) {
            if (setA.has(headB)) {
                return headB;
            }
            headB = headB.next;
        }
    }
    return null;
};