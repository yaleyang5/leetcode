/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums === undefined || nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [[nums[0]]];
    }
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var perms = permute(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)));
        for (var j = 0; j < perms.length; j++) {
            var arr = [nums[i]].concat(perms[j].slice());
            result.push(arr);
        }
    }
    return result;
};