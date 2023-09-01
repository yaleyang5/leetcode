/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    
    var quickSelect = (l, r) => {
        var pivot = nums[r];
        var p = l;
        for (var i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                var temp = nums[p];
                nums[p] = nums[i];
                nums[i] = temp;
                p++;
            }
        }
        var t = nums[p];
        nums[p] = nums[r];
        nums[r] = t;
        if (p > k) {
            return quickSelect(l, p - 1);
        } else if (p < k) {
            return quickSelect(p + 1, r);
        } else {
            return nums[p];
        }
    }
    
    return quickSelect(0, nums.length - 1);
};
    
    
    