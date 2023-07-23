/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true;
    }
    var map = {
        '(': -1,
        '[': -2,
        '{': -3,
        ')': 1,
        ']': 2,
        '}': 3
    }
    var stack = [s[0]];
    for (var i = 1; i < s.length; i++) {
        var curr = s[i];
        // console.log(stack, curr, s[i - 1]);
        if (map[curr] > 0 && map[curr] + map[stack[stack.length - 1]] === 0) {
            stack.pop();
        } else {
            stack.push(curr);
        }
    }
    return stack.length === 0;
};