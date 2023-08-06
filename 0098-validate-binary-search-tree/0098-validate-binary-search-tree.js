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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    if (root.left === null && root.right === null) {
        return true;
    }
    if (root.left === null) {
        return root.val < root.right.val && isGreater(root.right, root.val) && isValidBST(root.right);
    }
    if (root.right === null) {
        return root.val > root.left.val && isLess(root.left, root.val) && isValidBST(root.left);
    }
    return isValidBST(root.left) && isValidBST(root.right) && isLess(root.left, root.val) && isGreater(root.right, root.val);
};

var isLess = (root, val) => {
    if (root === null) {
        return true;
    }
    return root.val < val && isLess(root.left, val) && isLess(root.right, val);
};

var isGreater = (root, val) => {
    if (root === null) {
        return true;
    }
    return root.val > val && isGreater(root.left, val) && isGreater(root.right, val);
};