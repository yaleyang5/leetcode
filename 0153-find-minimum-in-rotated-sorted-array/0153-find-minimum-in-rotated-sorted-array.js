/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // use binary search to find element where previous > curr
    if (nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }
    var start = 0;
    var end = nums.length - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
            return nums[mid];
        } else if (mid + 1 < nums.length && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[start] > nums[end] && nums[start] > nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};