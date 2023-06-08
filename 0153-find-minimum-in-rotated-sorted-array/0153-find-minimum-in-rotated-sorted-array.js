/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // minimum is the point where nums[i+1] < nums[i]
    var start = 0;
    var end = nums.length - 1;
    if (end < 2) {
        return Math.min(nums[start], nums[end]);
    }
    if (nums[start] < nums[end]) {
        return nums[start];
    }
    while (start < end) {
        var mid = Math.floor(start + (end - start) / 2);
        // console.log(start, mid, end);
        if (mid + 1 <= nums.length && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
            return nums[mid];
        } else if (nums[start] < nums[end]) {
            return nums[start];
        } else if (nums[start] < nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return nums[start];
};