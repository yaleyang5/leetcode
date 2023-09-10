/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) {
        return [[]];
    }
    if (nums.length === 1) {
        return [[nums[0]]];
    }
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var temp = permute(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)));
        for (var j = 0; j < temp.length; j++) {
            temp[j] = [nums[i]].concat(temp[j]);
            result.push(temp[j].slice());
        }
    }
    return result;
};