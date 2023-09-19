/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    var dfs = (i, subset) => {
        if (i === nums.length) {
            res.push(subset.slice());
            return;
        }
        subset.push(nums[i]);
        dfs(i + 1, subset);
        subset.pop();
        dfs(i + 1, subset);
    }
    dfs(0, []);
    return res;
};