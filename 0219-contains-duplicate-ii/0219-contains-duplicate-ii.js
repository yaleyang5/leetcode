/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var numSet = {};
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var currSet = numSet[num];
        // console.log(i, num, numSet, currSet);
        if (currSet === undefined) {
            numSet[num] = [];
        } else {
            for (var j = 0; j < currSet.length; j++) {
                // console.log(currSet, j, currSet[j], i, k);
                if (Math.abs(currSet[j] - i) <= k) {
                    return true;
                }
            }
        }
        numSet[num].push(i);
    }
    return false;
};