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
    var dfs = (i, set, subset) => {
        if (i === nums.length) {
            res.push(subset.slice());
            return;
        }
        set.add(nums[i]);
        // add element without restriction if set is empty
        subset.push(nums[i]);
        var temp = new Set(set);
        dfs(i + 1, set, subset);
        // continue until reaching diff element
        subset.pop();
        while (temp.has(nums[i])) {
            i++;
        }
        dfs(i, temp, subset);
    }
    dfs(0, new Set(), []);
    return res;
};