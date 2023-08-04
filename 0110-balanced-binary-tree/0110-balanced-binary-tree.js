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
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    var balanced = Math.abs(maxHeight(root.left) - maxHeight(root.right)) <= 1;
    return balanced && isBalanced(root.left) && isBalanced(root.right);
};

var maxHeight = (root) => {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxHeight(root.right), maxHeight(root.left));
}