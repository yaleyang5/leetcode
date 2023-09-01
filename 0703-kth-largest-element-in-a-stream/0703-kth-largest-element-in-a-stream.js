/**
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function(k, nums) {
    this.nums = nums;
    this.nums.sort((a,b) => (a - b));
    this.k = k;
    return this;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    for (var i = this.nums.length - 2; i > -1; i--) {
        if (this.nums[i + 1] < this.nums[i]) {
            var temp = this.nums[i];
            this.nums[i] = this.nums[i + 1];
            this.nums[i + 1] = temp;
        } else {
            break;
        }
    }
    return this.nums[this.nums.length - this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */