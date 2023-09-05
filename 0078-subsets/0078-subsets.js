/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    
    var dfs = (i, curr) => {
        if (i >= nums.length) {
            res.push(curr.slice());
            return;
        }
        curr.push(nums[i]);
        dfs(i + 1, curr);
        
        curr.pop();
        dfs(i + 1, curr);
    }
    dfs(0, []);
    
    return res;
};