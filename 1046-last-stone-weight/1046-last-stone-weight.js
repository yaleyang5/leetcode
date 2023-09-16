/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    var MPQ = new MaxPriorityQueue();
    for (var stone of stones) {
        MPQ.enqueue(stone);
    }
    while (MPQ.size() > 1) {
        var first = MPQ.dequeue().element;
        var second = MPQ.dequeue().element;
        if (first === second) {
            continue;
        }
        if (first > second) {
            MPQ.enqueue(first - second);
        }
    }
    return MPQ.isEmpty() ? 0 : MPQ.front().element;
};