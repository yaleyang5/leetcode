/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var maxPQ = new MaxPriorityQueue();
    
    nums.forEach((num) => maxPQ.enqueue(num));
    
    return maxPQ.toArray().map((el) => el.element)[k - 1];
};