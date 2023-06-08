/**
 * @param {number[]} nums
 * @return {number}
 */
var findPivot = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    if (nums[0] < nums[end]) {
        return -1;
    }
    while (start <= end) {
        var mid = Math.floor(start + (end - start) / 2);
        if (nums[start] > nums[(start + 1) % nums.length]) {
            return start;
        } else if (nums[end] > nums[(end + 1) % nums.length]){
            return end;
        } else if (nums[mid] === nums[start] && nums[mid] === nums[end]) {
            start++;
            end--;
        } else if (nums[mid] > nums[(mid + 1) % nums.length]) {
            return mid;
        } else if (nums[(mid - 1 + nums.length) % nums.length] > nums[mid]) {
            return (mid - 1 + nums.length) % nums.length;
        } else if (nums[mid] >= nums[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

var findMin = function(nums) {
    return nums[findPivot(nums) + 1];
}