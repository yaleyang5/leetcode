/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var stack = [];
    var output = new Array(temperatures.length);
    for (var i = 0; i < temperatures.length; i++) {
        // console.log(stack, output);
        var current = temperatures[i];
        if (stack.length === 0 || current <= stack[stack.length - 1][1]) {
            stack.push([i, current]);
            output[i] = 0;
        } else {
            while (stack.length - 1 >= 0 && current > stack[stack.length - 1][1]) {
                var popped = stack.pop();
                // console.log(i, current, popped);
                output[popped[0]] = i - popped[0];
            }
            stack.push([i, current]);
            output[i] = 0;
        }
    }
    return output;
};