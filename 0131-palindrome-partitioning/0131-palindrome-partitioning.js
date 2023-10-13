/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res = [];
    var partition = [];
    
    var dfs = (i) => {
        // console.log(i);
        if (i >= s.length) {
            res.push(partition.slice());
            return;
        }
        for (var j = i; j < s.length; j++) {
            if (checkPalin(s.substring(i, j + 1))) {
                partition.push(s.substring(i, j + 1));
                dfs(j + 1);
                partition.pop();
            }
        }
    }
    dfs(0);
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