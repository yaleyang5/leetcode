/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var numLetters = {};
    for (var i = 0; i < tasks.length; i++) {
        if (numLetters[tasks[i]] === undefined) {
            numLetters[tasks[i]] = 0;
        }
        numLetters[tasks[i]]++;
    }
    var maxPQ = new MaxPriorityQueue();
    Object.values(numLetters).forEach((num) => maxPQ.enqueue(num));
    var queue = [];
    var time = 0;
    while (maxPQ.size() > 0 || queue.length > 0) {
        // check most recent val in q and see if it can be added back to PQ
        if (queue.length > 0 && queue[0][1] === time) {
            maxPQ.enqueue(queue.shift()[0]);
        }
        // if there is something in PQ, pop out largest
        // increment time
        time++;
        if (maxPQ.size() > 0) {
            // pop the largest #, decrementing by 1
            var temp = maxPQ.dequeue().element - 1;
            // if !0 send it to the queue with the next time that it will be available
            if (temp !== 0) {
                queue.push([temp, time + n]);
            } 
        }
    }
    
    return time;
};