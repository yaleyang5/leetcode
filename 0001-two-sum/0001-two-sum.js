/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var diff = {};
    for (var i = 0; i < nums.length; i++) {
        if (diff[target - nums[i]] === undefined) {
            diff[nums[i]] = i;
        } else {
            return [i, diff[target - nums[i]]];
        }
    }
    return [-1, -1];
};