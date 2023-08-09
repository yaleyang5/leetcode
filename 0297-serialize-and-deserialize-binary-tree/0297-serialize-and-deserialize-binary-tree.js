/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var result = [];
    var dfs = (root) => {
        if (root === null) {
            result.push('N');
            return;
        }
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
        return;
    }
    dfs(root);
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // console.log(data);
    data = data.split(',');
    if (data.length === 0) {
        return null;
    }
    var i = 0;
    var dfs = () => {
        if (data[i] === 'N') {
            i ++;
            return null;
        }
        var node = new TreeNode(Number(data[i]));
        i ++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */