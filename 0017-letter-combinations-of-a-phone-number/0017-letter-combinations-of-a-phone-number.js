/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    
    var res = [];
    
    var dfs = (i, combo) => {
        if (i === digits.length) {
            res.push(combo.slice());
            return;
        }
        var str = map[digits[i]];
        for (var j = 0; j < str.length; j++) {
            dfs(i + 1, combo + str[j]);
        }
    }
    if (digits.length > 0) {
        dfs(0, "");
    }
    
    return res;
};