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
var mergeTwoLists = function(list1, list2) {
    if (list1 === undefined || list1 === null) {
        return list2;
    }
    if (list2 === undefined || list2 === null) {
        return list1;
    }
    var head = list1.val <= list2.val ? list1 : list2;
    var temp = head;
    if (head.val === list1.val) {
        list1 = list1.next;
    } else {
        list2 = list2.next;
    }
    while (list1 !== null || list2 !== null) {
        if (list1 === null || (list2 !== null && list1.val > list2.val)) {
            temp.next = list2;
            list2 = list2.next;
            temp = temp.next;
        } else {
            temp.next = list1;
            list1 = list1.next;
            temp = temp.next;
        }
    }
    return head;
};