/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    var combos = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    if (digits.length === 1) {
        return combos[digits[0]].split('');
    }
    var result = [];
    // digits[i] is a number [ "2" ]
    for (var i = 0; i < combos[digits[0]].length; i++) {
        var digitsSlice = letterCombinations(digits.slice(1));
        for (var j = 0; j < digitsSlice.length; j++) {
            result.push(combos[digits[0]][i] + digitsSlice[j]);
        }
    }
    return result;
};