/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var pre = Array(nums.length);
    var post = Array(nums.length);
    var result = Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        // build prefix and postfix
        if (i < 1) {
            pre[i] = nums[i];
            post[post.length - 1 - i] = nums[nums.length - 1 - i];
        } else {
            pre[i] = nums[i] * pre[i - 1];
            post[post.length - 1 - i] = nums[nums.length - 1 - i] * post[post.length - i];
        }
    }
    // console.log(pre, post)
    for (var j = 0; j < result.length; j++) {
        if (j === 0) {
            result[j] = post[j + 1];
        } else if (j === result.length - 1) {
            result[j] = pre[j - 1];
        } else {
            result[j] = pre[j - 1] * post[j + 1];
        }
    }
    return result;
};