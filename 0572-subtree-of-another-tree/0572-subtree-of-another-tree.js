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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    console.log(root, subRoot);
    if (root === null && subRoot === null) {
        return true;
    }
    if (root === null || subRoot === null) {
        return false;
    }
    return root.val === subRoot.val ? 
        isSameTree(root, subRoot) ||  
        isSubtree(root.left, subRoot) || 
        isSubtree(root.right, subRoot): 
        isSubtree(root.left, subRoot) || 
        isSubtree(root.right, subRoot);
};

var isSameTree = (r1, r2) => {
    // console.log('same!', r1, r2)
    if (r1 === null && r2 === null) {
        return true;
    }
    if (r1 === null || r2 === null || r1.val !== r2.val) {
        return false;
    }
    return isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
}