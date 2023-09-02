/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    
    var subset = [];
    // i is index
    var dfs = (i) => {
        if (i >= nums.length) {
            res.push(subset.slice());
            return;
        }
        // subset WITH nums[i]
        subset.push(nums[i]);
        dfs(i + 1);
        
        // subset WITHOUT nums[i]
        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    return res;
};