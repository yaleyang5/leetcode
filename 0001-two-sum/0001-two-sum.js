/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // iterate through nums
    // how to store pairs of sums? key: target - value, value: index
        // we then check if value exists in set
        // if so, return current index and value
    var values = {};
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var vIndex = values[value];
        if (vIndex === undefined) {
            values[target - value] = i;
        } else {
            return [i, vIndex];
        }
    }
    return [-1, -1];
};