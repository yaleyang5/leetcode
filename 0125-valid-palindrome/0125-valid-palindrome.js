/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = "";
    for (var i = 0; i < s.length; i++) {
        var char = s[i].toLowerCase();
        var cc = char.charCodeAt(0);

        if ((cc > 47 && cc < 58) || (cc > 96 && cc < 123)) {
            str += char;
        }
    }
    // console.log(str);
    for (var i = 0; i < Math.floor(str.length/2); i++) {
        // console.log(str[i], str[str.length - 1 - i]);
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};