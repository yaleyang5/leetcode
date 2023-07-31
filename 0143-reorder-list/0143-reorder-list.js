/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // let's do it in O(n) time first.
    var temp = head;
    var dummy = new ListNode(0, head);
    var arr = [];
    while (temp !== null) {
        arr.push(temp);
        temp = temp.next;
    }
    // console.log(arr);
    temp = dummy;
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        temp.next = arr[i];
        temp = temp.next;
        temp.next = arr[arr.length - i - 1];
        temp = temp.next;
        temp.next = arr[i + 1];
        temp = temp.next;
    }
    temp.next = null;
    return dummy.next;
};