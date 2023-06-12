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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isSameTree(root.left, root.right);
};

var isSameTree = (p, q) => {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    }
    return isSameTree(p.left, q.right) && p.val === q.val && isSameTree(p.right, q.left);
}