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
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var arr = [];
    var temp = head;
    while (temp !== null) {
        arr.push(temp);
        temp = temp.next;
    }
    arr.sort((a,b) => (a.val - b.val));
    // console.log(arr);
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1];
    }
    arr[arr.length - 1].next = null;
    return arr[0];
};