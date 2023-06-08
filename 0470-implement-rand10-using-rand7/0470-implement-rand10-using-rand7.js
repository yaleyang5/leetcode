/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    var count = 0;
    for (var i = 0; i < 10; i++) {
        count += rand7();
    }
    return count % 10 + 1;
};