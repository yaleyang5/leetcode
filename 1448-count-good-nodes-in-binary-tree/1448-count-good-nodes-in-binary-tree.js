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
    var dfs = (root, max) => {
        var result = 0;
        if (root === null) {
            return 0;
        }
        if (root.val >= max) {
            result++;
            max = root.val;
        }
        result += dfs(root.left, max);
        result += dfs(root.right, max);
        return result;
    }
    
    return dfs(root, root.val);
};