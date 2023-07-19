/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => (a-b));
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        var start = i + 1;
        var end = nums.length - 1;
        while (start < end) {
            var sum = nums[i] + nums[start] + nums[end];
            if (sum > 0) {
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                result.push([nums[i], nums[start], nums[end]]);
                start++;
                while (nums[start] === nums[start - 1] && start < end) {
                    start++;
                }
            }
        }
    }
    return result;
};
