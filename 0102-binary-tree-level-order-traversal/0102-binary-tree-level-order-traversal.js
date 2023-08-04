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
    var level = [[root.val, root]];
    var newLevel = level.slice();
    while (level.length > 0) {
        var temp = [];
        for (var i = 0; i < level.length; i++) {
            temp.push(level[i][0]);
        }
        result.push(temp);
        newLevel = [];
        for (var i = 0; i < level.length; i++) {
            if (level[i][1] !== null && level[i][1] !== undefined) {
                var left = level[i][1].left;
                var right = level[i][1].right;
                if (left) {
                    newLevel.push([left.val, left]);
                } 
                if (right) {
                    newLevel.push([right.val, right]);
                }
            }
        }
        level = newLevel;
    }
    return result;
};