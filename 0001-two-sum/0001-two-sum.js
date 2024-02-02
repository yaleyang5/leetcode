/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var diff = {};
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var check = diff[num];
        if (check === undefined) {
            diff[target - num] = i;
        } else {
            return [i, check];
        }
    }
    return [-1, -1];
};