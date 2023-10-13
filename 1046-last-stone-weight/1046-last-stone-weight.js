/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    var max = new MaxPriorityQueue();
    
    for (var i = 0; i < stones.length; i++) {
        max.enqueue(stones[i]);
    }
    while (max.size() > 0) {
        if (max.size() === 1) {
            return max.front().element;
        }
        var first = max.dequeue().element;
        var second = max.dequeue().element;
        
        if (first !== second) {
            max.enqueue(Math.abs(first - second));
        }
    }
    return 0;
};