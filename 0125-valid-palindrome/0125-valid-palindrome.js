/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 1 || s.length === 0) {
        return true;
    }
    var alphas = 0;
    const alphanumeric = /^[\p{L}\p{N}]*$/u;
    var j = s.length - 1;
    for (var i = 0; i < j; i++) {
        while (i + 1 < s.length && !s[i].toLowerCase().match(alphanumeric)) {
            i++;
        } 
        while (j - 1 >= 0 && !s[j].toLowerCase().match(alphanumeric)) {
            j--;
        }
        // console.log(s[i],s[j]);
        if (s[i].match(alphanumeric) && s[j].match(alphanumeric) && s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        j--;
    }
    return true;
};