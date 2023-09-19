/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // decision tree: start with []
    // add to set: left tree does not care, right tree only unique
    // when i === nums.length, push slice to res and return
    var res = [];
    nums.sort((a,b) => a-b);
    var dfs = (i, subset) => {
        if (i === nums.length) {
            res.push(subset.slice());
            return;
        }
        // all subsets with nums[i];
        subset.push(nums[i]);
        dfs(i + 1, subset);
        // all subsets without nums[i]
        var temp = subset.pop();
        while (temp === nums[i]) {
            i++;
        }
        dfs(i, subset);
    }
    dfs(0, []);
    return res;
};