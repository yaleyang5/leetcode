/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
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
        var arr = map[digits[i]];
        for (var j = 0; j < arr.length; j++) {
            var temp = combo;
            combo += arr[j];
            dfs(i + 1);
            combo = temp;
        }
    }
    dfs(0);
    
    return res;
};