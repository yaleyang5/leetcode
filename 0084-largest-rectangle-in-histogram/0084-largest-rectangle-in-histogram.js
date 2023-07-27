/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var maxArea = 0;
    var stack = [];
    for (var i = 0; i < heights.length; i++) {
        var start = i;
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            var popped = stack.pop();
            maxArea = Math.max(maxArea, popped[1] * (i - popped[0]));
            start = popped[0];
        }
        stack.push([start, heights[i]]);
    }
    
    for (var i = 0; i < stack.length; i++) {
        maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
    }
    return maxArea;
};