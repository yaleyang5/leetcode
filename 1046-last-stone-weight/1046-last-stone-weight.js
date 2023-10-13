/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    var max = new MaxPriorityQueue();
    
    for (var i = 0; i < stones.length; i++) {
        max.enqueue(stones[i]);
    }
    while (max.size() > 1) {
        var first = max.dequeue().element;
        var second = max.dequeue().element;
        
        if (first !== second) {
            max.enqueue(first - second);
        }
    }
    return max.isEmpty() ? 0 : max.front().element;
};