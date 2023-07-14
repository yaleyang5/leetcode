/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    // iterate just once (probably still too slow)
    var lens = {};
    var max = 1;
    lens[arr[0]] = 1;
    for (var i = 1; i < arr.length; i++) {
        var curr = lens[arr[i] - difference]
        if (curr !== undefined) {
            lens[arr[i]] = curr + 1;
            max = Math.max(max, curr + 1);
        } else {
            lens[arr[i]] = 1;
        }
        // console.log(max, i, lens)
    }
    return max;
};