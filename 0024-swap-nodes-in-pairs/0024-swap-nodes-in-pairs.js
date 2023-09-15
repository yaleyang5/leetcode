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
var swapPairs = function(head) {
    if (head === null) {
        return null;
    }
    var temp = swapPair(head, head.next);
    head = temp[0];
    var prev = temp[1];
    temp = temp[1] === null ? null : temp[1].next;
    while (temp !== null) {
        var curr = swapPair(temp, temp.next);
        // console.log(prev, curr, temp);
        temp = curr[1] === null ? null : curr[1].next;
        prev.next = curr[0];
        prev = curr[1];
    }
    return head;
};

var swapPair = (first, second) => {
    if (first === null) {
        return [null, null];
    }
    if (second === null) {
        return [first, null];
    }
    first.next = second.next;
    second.next = first;
    return [second, first];
}