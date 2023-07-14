/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    // iterative method - similar to twoSum
    // create object keeping track of lengths of subsequences starting at a certain element (strategy below)
    var lens = {};
    // current max
    var max = 1;
    // first element's longest subsequence is 1
    lens[arr[0]] = 1;
    for (var i = 1; i < arr.length; i++) {
        // checking whether (current element - difference) is defined or not
        var curr = lens[arr[i] - difference]
        if (curr !== undefined) {
            // if defined, increase the length of the subsequence starting at that element
            lens[arr[i]] = curr + 1;
            // update max
            max = Math.max(max, curr + 1);
        } else {
            // if not defined, longest arithmetic subsequence length of any single element is 1
            lens[arr[i]] = 1;
        }
    }
    return max;
};

// strategy:
// object: keys = what we are looking for; "next" element that will continue the subsequence
// values = current length of that subsequence
// example: [1, 3, 8, 5], diff = 2
// {1: 1}, max = 1 <- [1] (first element we do not subtract difference from)
// 3 - diff = 1: found!
// {1:1, 3:2}, max = 2 <- [1, 3]
// {1:1, 3:2, 8:1}, max = 2 <- [1, 3], [8]
// {1:1, 3:2, 8:1, 5:3}, max = 3 <- [1, 3, 5], [8]
// return max