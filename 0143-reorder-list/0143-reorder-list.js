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
    var slow = head;
    var fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var temp = slow.next;
    slow.next = null;
    var second = reverse(temp);
    var first = head;
    
    while (second !== null) {
        var temp1 = first.next;
        var temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
    
    return head;
};

var reverse = (head) => {
    var prev = null;
    while (head !== null) {
        var temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}