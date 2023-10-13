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
    
    var combo = "";
    
    var dfs = (i) => {
        if (i === digits.length) {
            if (combo.length > 0) {
                res.push(combo.slice());
            }
            return;
        }
        var str = map[digits[i]];
        for (var j = 0; j < str.length; j++) {
            var temp = combo;
            combo += str[j];
            dfs(i + 1);
            combo = temp;
        }
    }
    dfs(0);
    
    return res;
};