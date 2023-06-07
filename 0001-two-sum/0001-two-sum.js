/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create an object -> seen elements
    var seenElements = {};
    for (var i = 0; i < nums.length; i++) {
        var currValue = nums[i];
        if (seenElements[currValue] !== undefined) {
            return [i, seenElements[currValue]]
        }
        seenElements[target - currValue] = i;
    }
    return [-1,-1]
};