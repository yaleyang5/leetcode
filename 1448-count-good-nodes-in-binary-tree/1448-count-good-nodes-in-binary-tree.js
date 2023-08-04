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
 * @return {number}
 */
var goodNodes = function(root) {
    if (root === null) {
        return 0;
    }
    var result = 0;
    var dfs = (root, max) => {
        if (root === null) {
            return null;
        }
        if (root.val >= max) {
            result++;
            max = Math.max(max, root.val);
        }
        dfs(root.left, max);
        dfs(root.right, max);
    }
    dfs(root, root.val);
    return result;
};