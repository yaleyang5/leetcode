/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // area = (height[j] - height[i]) * (Math.min(height[j], height[i]));
    var start = 0;
    var end = height.length - 1;
    var max = 0;
    while (start <= end) {
        var area = (end - start) * (Math.min(height[start], height[end]));
        max = Math.max(max, area);
        if (height[start] < height[end]) {
            start++;
        } else if (height[start] > height[end]) {
            end--;
        } else {
            start++;
            end--;
        }
    }
    return max;
};