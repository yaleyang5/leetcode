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
    var dummy = new ListNode(0, head);
    var groupPrev = dummy;
    
    while (true) {
        var kth = getKth(groupPrev, k);
        if (!kth) {
            break;
        }
        var groupNext = kth.next;
        
        var prev = kth.next;
        var curr = groupPrev.next;
        
        while (curr !== groupNext) {
            var temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }
    return dummy.next;
};

var getKth = (curr, k) => {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}