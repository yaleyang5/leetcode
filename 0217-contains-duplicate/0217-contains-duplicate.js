/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // create set of nums
    var numSet = {};
    // walk through array, add to set if DNE, else return true
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (numSet[num] === undefined) {
            numSet[num] = 0;
        } else {
            return true;
        }
    }
    return false;
};