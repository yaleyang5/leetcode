/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, pre) {
    // basic logic:
    // loop until #courses remaining === 0
        // complete all courses that do not require prerequisites, 
            // and remove those courses from all courses' prerequisites
        // if none completed and #courses remaining > 0, return []
    var courses = {};
    for (var i = 0; i < numCourses; i++) {
        courses[i] = [];
    }
    for (var i = 0; i < pre.length; i++) {
        courses[pre[i][0]].push(pre[i][1]);
    }
    console.log(courses);
    
    var remove = (course) => {
        for (var i = 0; i < numCourses; i++) {
            var index = courses[i].indexOf(course);
            if (index !== -1) {
                courses[i].splice(index, 1);
            }
        }
    }
    
    var order = [];
    var taken = {};
    var courseTaken = false;
    while (order.length < numCourses) {
        for (var i = 0; i < numCourses; i++) {
            if(taken[i] !== 1 && courses[i].length === 0) {
                order.push(i);
                courseTaken = true;
                taken[i] = 1;
                remove(i);
            }
        }
        if (!courseTaken && order.length < numCourses) {
            return [];
        }
        courseTaken = false;
    }
    return order;
};

