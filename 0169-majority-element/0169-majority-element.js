/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numCount = {}
    for (var num of nums) {
        if (numCount[num] === undefined) {
            numCount[num] = 0;
        }
        numCount[num]++;
        if (numCount[num] > Math.floor(nums.length / 2)) {
            return num;
        }
    }
    return -1;
};