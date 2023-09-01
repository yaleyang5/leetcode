/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var maxPQ = new MaxPriorityQueue();
    nums.forEach((num) => maxPQ.enqueue(num));
    for (var i = 0; i < k - 1; i++) {
        maxPQ.dequeue();
    }
    return maxPQ.front().element;
};
    
    
    