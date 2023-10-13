/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res = [];
    var dfs = (i, n, partition) => {
        // console.log(i, n);
        if (checkPalin(s.substring(i, i + n))) {
            partition.push(s.substring(i, i + n));
        } else {
            return;
        }
        // console.log(partition);
        for (var j = 1; j < s.length - i; j++) {
            dfs(i + n, j, partition.slice());
        }
        if (i + n === s.length) {
            res.push(partition.slice());
        }
        return;
    }
    for (var i = 1; i <= s.length; i++) {
        dfs(0, i, []);
    }
    return res;
};


var checkPalin = (s) => {
    var l = s.length;
    if (l === 1) {
        return true;
    }
    for (var i = 0; i < Math.floor(l / 2); i++) {
        if (s[i] !== s[l - i - 1]) {
            return false;
        }
    }
    return true;
}