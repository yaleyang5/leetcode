/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var stack = [];
    var result = [];
    var build = (open, closed) => {
        if (open === closed && open === n) {
            result.push(stack.join(''));
        }
        
        if (open < n) {
            stack.push('(');
            build(open + 1, closed);
            stack.pop();
        }
        
        if (closed < open) {
            stack.push(')');
            build(open, closed + 1);
            stack.pop();
        }
    }
    build(0, 0);
    return result;
};