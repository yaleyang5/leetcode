/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var amt = {};
    for (var i = 0; i < nums.length; i++) {
        if (amt[nums[i]] === undefined) {
            amt[nums[i]] = 1;
        } else {
            amt[nums[i]] += 1;
        }
    }
    var arr = Object.keys(amt).sort((a,b) => {
        return amt[a] - amt[b];
    });
    // console.log(arr);
    return arr.slice(arr.length - k);
};