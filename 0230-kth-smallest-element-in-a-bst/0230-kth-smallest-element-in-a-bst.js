/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var n = 0;
    var stack = [];
    var curr = root;
    while (curr !== null || stack.length !== 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop()
        n++;
        if (n === k) {
            return curr.val;
        }
        curr = curr.right;
    }
    return 'should never reach here';
};