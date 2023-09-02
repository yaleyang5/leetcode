
var MedianFinder = function() {
    // MaxPriorityQueue, MinPriorityQueue
    // [1, 2, 4] [6, 7]
    // add 3:
    // [1, 2, 3, 4] [6, 7];
    // [1, 2, 3] [4, 6, 7];
    this.maxPQ = new MaxPriorityQueue();
    this.minPQ = new MinPriorityQueue();
    return this;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    var minPQ = this.minPQ;
    var maxPQ = this.maxPQ;
    if (minPQ.size() > 0 && num >= minPQ.front().element) {
        minPQ.enqueue(num);
    } else {
        maxPQ.enqueue(num);
    }
    while (Math.abs(minPQ.size() - maxPQ.size()) > 1) {
        if (minPQ.size() > maxPQ.size()) {
            maxPQ.enqueue(minPQ.dequeue().element);
        } else {
            minPQ.enqueue(maxPQ.dequeue().element);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    var minPQ = this.minPQ;
    var maxPQ = this.maxPQ;
    if (minPQ.size() === maxPQ.size()) {
        return (maxPQ.front().element + minPQ.front().element) / 2;
    } else if (minPQ.size() > maxPQ.size()) {
        return minPQ.front().element;
    } else {
        return maxPQ.front().element;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */