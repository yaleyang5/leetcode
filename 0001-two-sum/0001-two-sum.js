/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var differences = {};
    for (var i = 0; i < nums.length; i++) {
        if (differences[nums[i]] === undefined) {
            differences[target - nums[i]] = i;
        } else {
            return [differences[nums[i]], i];
        }
    }
    return [-1, -1];
};