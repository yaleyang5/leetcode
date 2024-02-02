/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    // every combo (two pointers)
    var result = [];
    
    for (var i = 0; i < nums.length - 1; i++) {
        var target = -nums[i];
        var start = i + 1;
        var end = nums.length - 1;
        while (start < end) {
            // console.log(start, end);
            if (nums[start] + nums[end] > target) {
                while (end >= start && nums[end] === nums[end - 1]) {
                    end--;
                }
                end--;
                continue;
            } else if (nums[start] + nums[end] === target) {
                result.push([nums[i], nums[start], nums[end]]);
                while (start + 1 < nums.length && nums[start] === nums[start + 1]) {
                    start++;
                }
            }
            start++;
        }
        while (i < nums.length - 2 && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    
    return result;
};