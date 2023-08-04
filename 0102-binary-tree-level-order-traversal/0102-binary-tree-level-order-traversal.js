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
    var result = [[root.val]];
    var q = [root];
    while (q.length > 0) {
        var level = [];
        var len = q.length;
        for (var i = 0; i < len; i++) {
            if (q[i].left) {
                q.push(q[i].left);
                level.push(q[i].left.val);
            }
            if (q[i].right) {
                q.push(q[i].right);
                level.push(q[i].right.val);
            }
        }
        for (var i = 0; i < len; i++) {
            q.shift();
        }
        if (level.length > 0) {
            result.push(level);
        }
    }
    return result;
};