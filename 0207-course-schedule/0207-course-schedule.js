/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var preReqs = {};
    for (var i = 0; i < prerequisites.length; i++) {
        if (preReqs[prerequisites[i][0]] === undefined) {
            preReqs[prerequisites[i][0]] = [];
        }
        preReqs[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    var set = new Set();
    for (var i = 0; i < numCourses; i++) {
        if (preReqs[i] === undefined) {
            set.add(i);
        }
    }
    var count = numCourses;
    while (set.size < numCourses && count > 0) {
        for (var key of Object.keys(preReqs)) {
            // console.log(set.values());
            var canBeTaken = true;
            var needToBeTaken = preReqs[key];
            for (var i = 0; i < needToBeTaken.length; i++) {
                if (!set.has(needToBeTaken[i])) {
                    canBeTaken = false;
                }
            }
            if (canBeTaken) {
                set.add(Number(key));
            }
        }
        count--;
    }
    return set.size === numCourses;
};