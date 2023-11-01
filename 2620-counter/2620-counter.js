/**
 * @param {number} n
 * @return {Function} counter
 */

var called = 0;
var prevN = null;

var createCounter = function(n) {
    if (n !== prevN) {
        prevN = n;
        called = 0;
    }
    return function() {
        return n + called++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */