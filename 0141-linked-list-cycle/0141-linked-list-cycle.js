/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // set with vals as keys, nodes as values
    var nodes = {};
    var curr = head;
    // var counter = 0;
    while (curr !== null) {
        // console.log(curr, nodes[curr.val]);
        if (nodes[curr.val] === undefined) {
            // console.log(curr.next.val, nodes);
            nodes[curr.val] = [];
        } 
        if (nodes[curr.val].indexOf(curr) !== -1) {
            return true;
        }
        nodes[curr.val].push(curr);
        curr = curr.next;
        // if (counter++ === 20) {
        //     break;
        // } 
    }
    return false;
};