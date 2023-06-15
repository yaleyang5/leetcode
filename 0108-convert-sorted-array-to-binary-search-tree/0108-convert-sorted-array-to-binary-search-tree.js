/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums === null || nums === undefined || nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    // middle of nums is first node
    var mid = Math.floor(nums.length / 2);
    var head = new TreeNode(nums[mid]);
    // console.log(nums, mid)
    // middle of left and middle of right are left and right, continue until all null
    head.left = sortedArrayToBST(nums.slice(0, mid));
    head.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
    // return first node
    return head;
};