/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var res = [];
    
    var dfs = (i, curr, total) => {
        if (i === candidates.length || total > target) {
            return;
        }
        if (total === target) {
            res.push(curr.slice());
            return;
        }
        
        
        curr.push(candidates[i]);
        dfs(i, curr, total + candidates[i]);
        
        curr.pop();
        dfs(i + 1, curr, total);
    }
    dfs(0, [], 0);
    
    return res;
};