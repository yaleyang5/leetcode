/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var maxQueue = new MinPriorityQueue();
    
    points.forEach((point) => maxQueue.enqueue(point, Math.sqrt((point[0] * point[0] + point[1] * point[1]))));
    
    var res = [];
    
    for (var i = 0; i < k; i++) {
        res.push(maxQueue.dequeue().element);
    }
    
    return res;
};