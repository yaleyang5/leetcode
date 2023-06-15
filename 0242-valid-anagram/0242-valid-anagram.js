/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var sLetters = {};
    var tLetters = {};
    for (var i = 0; i < s.length; i++) {
        if (sLetters[s[i]] === undefined) {
            sLetters[s[i]] = 1;
        } else {
            sLetters[s[i]] += 1;
        }
        if (tLetters[t[i]] === undefined) {
            tLetters[t[i]] = 1;
        } else {
            tLetters[t[i]] += 1;
        }
    }
    for (var key in sLetters) {
        if (sLetters[key] !== tLetters[key]) {
            return false;
        }
    }
    return true;
};