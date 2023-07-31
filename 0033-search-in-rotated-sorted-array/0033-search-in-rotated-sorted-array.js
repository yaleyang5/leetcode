/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var pivot = findPivot(nums);
    var len = nums.length;
    var start = pivot;
    var end = pivot - 1 + len;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        if (nums[mid % len] < target) {
            start = mid + 1;
        } else if (nums[mid % len] > target) {
            end = mid - 1;
        } else {
            return mid % len;
        }
    }
    return -1;
};

var findPivot = (nums) => {
    var len = nums === undefined ? 0 : nums.length;
    if (len === 0) {
        return -1;
    }
    if (len === 1 || nums[0] < nums[len - 1]) {
        return 0;
    }
    var start = 0;
    var end = len - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        if (mid + 1 < nums.length && nums[mid] > nums[mid + 1]) {
            return mid + 1;
        } else if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
            return mid;
        } else if (nums[start] > nums[mid] && nums[start] > nums[end]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}