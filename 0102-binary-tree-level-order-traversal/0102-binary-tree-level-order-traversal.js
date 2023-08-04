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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null || root === undefined) {
        return [];
    }
    var result = [];
    var q = [root];
    while (q.length > 0) {
        var level = [];
        var len = q.length;
        for (var i = 0; i < len; i++) { 
            var node = q.shift();
            if (node) {
                level.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        if (level.length > 0) {
            result.push(level);
        }
    }
    return result;
};