/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var res = [];
    var dfs = (i, total, subset) => {
        if (total === target) {
            res.push(subset.slice());
            return;
        }
        if (total > target || i === candidates.length) {
            return;
        }
        // can add as many as you want of i
        subset.push(candidates[i]);
        dfs(i, total + candidates[i], subset);
        // can NEVER add i again
        subset.pop();
        dfs(i + 1, total, subset);
    }
    dfs(0, 0, []);
    return res;
};