/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var sum = null;
    var distance = null;
    if (nums.length <= 3) {
        sum = 0;
        for (var i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        return sum;
    }
    for (var first = 0; first < nums.length - 2; first++) {
        for (var second = first + 1; second < nums.length - 1; second++) {
            for (var third = second + 1; third < nums.length; third++) {
                // console.log(first, second, third);
                var currSum = nums[first] + nums[second] + nums[third];
                // console.log(sum, distance, currSum)
                if (currSum === target) {
                    return target;
                } else if (distance === null || distance !== Math.min(distance, Math.abs(target - currSum))) {
                    sum = currSum;
                    distance = Math.abs(target - currSum);
                }
            }
        } 
    }
    return sum;
};