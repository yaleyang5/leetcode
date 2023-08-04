/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // console.log(root)
    if (root === null) {
        return root;
    }
    if (p.val >= root.val && q.val <= root.val || p.val <= root.val && q.val >= root.val) {
        return root;
    } else if (p.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return lowestCommonAncestor(root.left, p, q);
    }
};