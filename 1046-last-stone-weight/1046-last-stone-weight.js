/**
 * @param {number[]} stones
 * @return {number}
 */
/*
.enqueue
.front
.back
.dequeue
.isEmpty
.size
.toArray
.clear
*/

var lastStoneWeight = function(stones) {
    var queue = new MaxPriorityQueue();
    stones.forEach((stone) => queue.enqueue(stone));
    
    while (queue.size() > 0) {
        if (queue.size() === 1) {
            break;
        }
        var y = queue.dequeue().element;
        var x = queue.dequeue().element;
        if (x !== y) {
            queue.enqueue(y - x);
        }
    }
    return queue.isEmpty() ? 0 : queue.front().element;
};






