/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var minPQ = new MinPriorityQueue();
    for (var i = 0; i < nums.length; i++) {
        if (minPQ.size() < k || nums[i] > minPQ.front().element) {
            minPQ.enqueue(nums[i]);
        }
        if (minPQ.size() > k) {
            minPQ.dequeue();
        }
    }
    return minPQ.front().element;
};
    
    
    