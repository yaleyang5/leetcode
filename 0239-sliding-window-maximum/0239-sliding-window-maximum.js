/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var result = [];
    var l = 0;
    var r = 0;
    var q = [];
    // push(), pop(), shift(), unshift() 
    
    while (r < nums.length) {
        // pop smaller values from q
        while (q && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }
        q.push(r);
        
        // remove left val from window
        if (l > q[0]) {
            q.shift();
        }
        
        if (r + 1 >= k) {
            result.push(nums[q[0]]);
            l++;
        }
        
        r++;
    }
    return result;
};