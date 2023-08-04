/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    var dummy;
    var temp;
    if (l1.val > l2.val) {
        dummy = new ListNode(0, l2);
        temp = l2;
        l2 = l2.next;
    } else {
        dummy = new ListNode(0, l1);
        temp = l1;
        l1 = l1.next;
    }
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            temp.next = l2;
            temp = l2;
            l2 = l2.next;
        } else {
            temp.next = l1;
            temp = l1;
            l1 = l1.next;
        }
    }
    if (l1 === null) {
        temp.next = l2;
    }
    if (l2 === null) {
        temp.next = l1;
    }
    return dummy.next;
};