/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var preMap = {};
    for (var i = 0; i < numCourses; i++) {
        preMap[i] = [];
    }
    for (var [course, pre] of prerequisites) {
        preMap[course].push(pre);
    }
    var visited = new Set();
    var dfs = (course) => {
        if (visited.has(course)) {
            return false;
        }
        if (preMap[course].length === 0) {
            return true;
        }
        
        visited.add(course);
        for (pre of preMap[course]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visited.delete(course);
        preMap[course] = [];
        return true;
    }
    
    for (var course = 0; course < numCourses; course++) {
        if (!dfs(course)) {
            return false
        }
    }
    return true;
};