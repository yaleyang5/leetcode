/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    if (nums.length === 1) {
        return [[nums[0]]]
    }
    
    for (var i = 0; i < nums.length; i++) {
        var n = nums.shift();
        var perms = permute(nums);
        for (var perm of perms) {
            perm.push(n);
        }
        result = result.concat(perms);
        nums.push(n);
    }
    return result;
};