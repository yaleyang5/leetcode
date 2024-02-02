/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    // every combo (binary search)
    var result = [];
    
    var binarySearch = (start, target) => {
        var end = nums.length - 1;
        while (start <= end) {
            var mid = start + Math.floor((end - start) / 2);
            if (target > nums[mid]) {
                start = mid + 1;
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i]
        for (var j = i + 1; j < nums.length; j++) {
            var second = nums[j];
            var sum = first + second;
            var k = binarySearch(j + 1, -sum);
            var str = String(first) + "," + String(second) + "," + String(nums[k]);
            if (k !== -1) {
                result.push([first, second, nums[k]]);
            }
            while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                j++;
            }
        }
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    
    return result;
};