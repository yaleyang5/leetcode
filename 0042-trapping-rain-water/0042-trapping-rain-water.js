/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var sum = 0;
    var water = 0;
    var l = 0;
    var r = height.length - 1;
    var maxLeft = height[0];
    var maxRight = height[r];

    while (l < r) {
        var leftHeight = height[l];
        var rightHeight = height[r];
        var rightHigher = leftHeight <= rightHeight;
        water = rightHigher ? maxLeft - leftHeight : maxRight - rightHeight;
        sum = water > 0 ? sum + water : sum;
        if (rightHigher) {
            maxLeft = Math.max(maxLeft, leftHeight);
            l++;
        } else {
            maxRight = Math.max(maxRight, rightHeight);
            r--;
        }
    }
    return sum;
};