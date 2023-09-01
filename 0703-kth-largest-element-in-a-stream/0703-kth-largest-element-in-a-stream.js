/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinPriorityQueue();
    this.k = k;
    
    nums.forEach((num) => this.add(num));
    return this;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.minHeap.size() < this.k) {
        this.minHeap.enqueue(val);
        
        return this.top();
    }
    
    if (this.top() < val) {
        this.minHeap.dequeue();
        this.minHeap.enqueue(val);
    }
    
    return this.top();
};


KthLargest.prototype.top = function() {
    return this.minHeap.front()?.element || 0;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */