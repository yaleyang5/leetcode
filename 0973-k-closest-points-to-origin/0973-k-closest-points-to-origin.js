/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var maxQueue = new MaxPriorityQueue();
    for (var point of points) {
        var dist = (Math.pow(point[0], 2) + Math.pow(point[1], 2)) 
        if (maxQueue.size() < k) {
            maxQueue.enqueue(point, dist);
        } else if (dist < maxQueue.front().priority) {
            maxQueue.dequeue();
            maxQueue.enqueue(point, dist);
        }
    }
    
    return maxQueue.toArray().map((el) => el.element);
};