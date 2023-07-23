/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var s = [];
    var map = {
        '+': (a, b) => (a + b),
        '-': (a, b) => (a - b),
        '*': (a, b) => (a * b),
        '/': (a, b) => Math.trunc(a / b)
    }
    for (var i = 0; i < tokens.length; i++) {
        // console.log(s);
        var curr = tokens[i];
        if (map[curr] !== undefined) {
            var n1 = Number(s.pop());
            var n2 = Number(s.pop());
            s.push(map[curr](n2, n1));
        } else {
            s.push(Number(curr));
        }
    }
    return tokens.length === 1 ? tokens[0] : s[0];
};