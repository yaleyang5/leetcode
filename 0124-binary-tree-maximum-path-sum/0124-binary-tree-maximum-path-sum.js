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
var maxPathSum = function(root) {
    var dfs = (root) => {
        if (root === null) {
            return [0, -Number.MAX_SAFE_INTEGER];
        }
        var [left, leftSplit] = dfs(root.left);
        left = Math.max(0, left);
        
        var [right, rightSplit] = dfs(root.right);
        right = Math.max(0, right);
        
        var result = Math.max(leftSplit, rightSplit, root.val + left + right);
        return [root.val + Math.max(left, right), result]
    }
    return dfs(root)[1];
};