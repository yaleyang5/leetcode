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
    // search inorder, return(k - 1)th index
    var inOrder = (root) => {
        if (root === null) {
            return [];
        }
        if (root.left === null && root.right === null) {
            return [root.val];
        }
        return inOrder(root.left).concat(root.val).concat(inOrder(root.right));
    }
    var arr = inOrder(root);
    return arr[k - 1];
};