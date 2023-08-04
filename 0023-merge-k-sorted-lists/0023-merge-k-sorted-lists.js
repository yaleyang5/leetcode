/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // brute force
    var arr = [];
    if (lists.length === 0) {
        return null;
    }
    // console.log('made it before iterating through lists');
    for (var i = 0; i < lists.length; i++) {
        var temp = lists[i];
        while (temp !== null) {
            arr.push([temp, i]);
            temp = temp.next;
        }
    }
    // console.log('made it after iterating through lists');
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return arr[0][0];
    }
    // console.log('made it before sorting');
    arr.sort((a, b) => (a[0].val - b[0].val === 0 ? a[1] - b[1] : a[0].val - b[0].val));
    // console.log('made it after sorting', arr);
    var dummy = new ListNode(0, arr[0][0]);
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i][0].next = arr[i + 1][0];
    }
    arr[arr.length - 1][0].next = null;
    return dummy.next;
};