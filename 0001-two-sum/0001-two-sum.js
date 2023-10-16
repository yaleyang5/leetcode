/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sums = {};
    for (var i = 0; i < nums.length; i++) {
        if (sums[nums[i]] !== undefined) {
            return [i, sums[nums[i]]];
        }
        sums[target - nums[i]] = i;
    }
    return [-1, -1];
};