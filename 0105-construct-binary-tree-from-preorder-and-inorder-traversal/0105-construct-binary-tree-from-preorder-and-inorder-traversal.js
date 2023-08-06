/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0 || preorder.length === 0) {
        return null;
    }
    var root = preorder.shift();
    var index = inorder.indexOf(root);
    
    var node = new TreeNode(root);
    node.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
    node.right = buildTree(preorder.slice(index, preorder.length), inorder.slice(index + 1, inorder.length));
    return node;
};