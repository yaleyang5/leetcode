/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // brute force
    var arr1 = [];
    var arr2 = [];
    while (l1 !== null) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        arr2.push(l2.val);
        l2 = l2.next;
    }
    var res = addTwoArrays(arr1, arr2);
    if (res.length === 0) {
        return null;
    }
    var head = new ListNode(res[0]);
    var prev = head;
    for (var i = 1; i < res.length; i++) {
        var node = new ListNode(res[i]);
        prev.next = node;
        prev = node;
    }
    return head;
};

var addTwoArrays = (a1, a2) => {
    // return result array in reverse order
    var result = [];
    if (a1.length > a2.length) {
        var carry = 0;
        for (var i = 0; i < a1.length; i++) {
            if (a2[i] !== undefined) {
                result.push((a1[i] + a2[i] + carry) % 10);
                carry = a1[i] + a2[i] + carry >= 10 ? 1 : 0;
            } else {
                result.push((a1[i] + carry) % 10);
                carry = a1[i] + carry >= 10 ? 1 : 0;
            }
        }
        if (carry === 1) {
            result.push(1);
        }
    } else {
        var carry = 0;
        for (var i = 0; i < a2.length; i++) {
            if (a1[i] !== undefined) {
                result.push((a1[i] + a2[i] + carry) % 10);
                carry = a1[i] + a2[i] + carry >= 10 ? 1 : 0;
            } else {
                result.push((a2[i] + carry) % 10);
                carry = a2[i] + carry >= 10 ? 1 : 0;
            }
        }
        if (carry === 1) {
            result.push(1);
        }
    }
    return result;
}