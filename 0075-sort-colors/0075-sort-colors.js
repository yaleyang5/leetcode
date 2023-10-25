/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var set = {};
    for (var i = 0; i < nums.length; i++) {
        if (set[nums[i]] === undefined) {
            set[nums[i]] = 0;
        }
        set[nums[i]]++;
    }
    if (set[0] === undefined) {
        set[0] = 0;
    }
    if (set[1] === undefined) {
        set[1] = 0;
    }
    if (set[2] === undefined) {
        set[2] = 0;
    }
    for (var i = 0; i < set[0]; i++) {
        nums[i] = 0;
    }
    for (var i = set[0]; i < set[0] + set[1]; i++) {
        nums[i] = 1;
    }
    for (var i = set[0] + set[1]; i < set[0] + set[1] + set[2]; i++) {
        nums[i] = 2;
    }
    return nums;
};