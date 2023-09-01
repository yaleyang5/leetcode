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
            var front = queue.shift()[0];
            maxPQ.enqueue(front);
        }
        // if there is something in PQ, pop out largest
        if (maxPQ.size() > 0) {
            // pop the largest #
            var temp = maxPQ.dequeue().element;
            // decrement by 1
            temp--;
            // if !0 send it to the queue with the next time that it will be available
            if (temp !== 0) {
                queue.push([temp, time + 1 + n]);
            } 
        }
        // increment time
        time++;
    }
    return time;
};