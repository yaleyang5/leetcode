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
    var inorderIndexes = {};
    for (var i = 0; i < inorder.length; i++) {
        inorderIndexes[inorder[i]] = i;
    }
    
    return build(preorder, inorderIndexes, 0, inorder.length - 1);
};

var build = (preorder, inorderIndexes, start, end) => {    
    if (start > end) {
        return null;
    }
    var val = preorder.shift(); 
    var root = new TreeNode(val);
    
    root.left = build(preorder, inorderIndexes, start, inorderIndexes[val] - 1);
    root.right = build(preorder, inorderIndexes, inorderIndexes[val] + 1, end);
    
    return root;
}