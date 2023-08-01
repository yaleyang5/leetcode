/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var arr = [];
    var temp = head;
    while (temp !== null) {
        arr.push(temp);
        temp = temp.next;
    }
    var len = arr.length;
    var removeIndex = len - n;
    console.log(arr, removeIndex);
    if (n === len) {
        return head.next;
    } else if (n === 1) {
        arr[len - 2].next = null;
    } else {
        arr[removeIndex - 1].next = arr[removeIndex + 1];
    }
    
    return head;
};