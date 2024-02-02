/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, pre) {
    var preReqs = {};
    var path = {};
    for (var i = 0; i < numCourses; i++) {
        preReqs[i] = [];
    }
    for (var i = 0; i < pre.length; i++) {
        preReqs[pre[i][0]].push(pre[i][1]);
    }
    // console.log(preReqs);
    var order = [];
    var visited = {};
    var cycle = {};
    
    var dfs = (course) => {
        if (cycle[course] === 1) {
            return false;
        }
        if (visited[course] === 1) {
            return true;
        }
        
        cycle[course] = 1;
        
        for (var i = 0; i < preReqs[course].length; i++) {
            if (dfs(preReqs[course][i]) === false) {
                return false;
            }
        }
        cycle[course] = 0;
        visited[course] = 1;
        order.push(course);
        return true;
    }
    
    for (var i = 0; i < numCourses; i++) {
        if (dfs(i) === false) {
            return [];
        }
    }
    return order;
};