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
    var res = root.val;
    
    var dfs = (root) => {
        if (root === null) {
            return 0;
        }
        var left = dfs(root.left);
        var right = dfs(root.right);
        left = left < 0 ? 0 : left;
        right = right < 0 ? 0 : right;
        res = Math.max(res, root.val + left + right);
        
        return root.val + Math.max(left, right);
    }
    
    dfs(root);
    
    return res;
};