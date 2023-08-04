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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];
    var q = [root];
    while (q.length > 0) {
        var len = q.length;
        var level = [];
        for (var i = 0; i < len; i++) {
            var node = q.shift();
            if (node) {
                q.push(node.left);
                q.push(node.right);
                level.push(node.val);
            }
        }
        if (level.length > 0) {
            result.push(level[level.length - 1]);
        }
    }    
    return result;
};