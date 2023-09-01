/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var minPQ = new MinPriorityQueue();
    for (var num of nums) {
        if (minPQ.size() < k || num > minPQ.front().element) {
            minPQ.enqueue(num);
        }
        if (minPQ.size() > k) {
            minPQ.dequeue();
        }
    }
    return minPQ.front().element;
};
    
    
    