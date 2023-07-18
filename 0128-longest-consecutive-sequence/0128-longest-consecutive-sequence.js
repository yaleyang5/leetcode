/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var set = new Set(nums);
    // console.log(set);
    var max = 1;
    for (var i = 0; i < nums.length; i++) {
        var temp = nums[i] - 1;
        if (!set.has(temp)) {
            var count = 0;
            temp = nums[i];
            while (set.has(temp)) {
                count++;
                temp++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};