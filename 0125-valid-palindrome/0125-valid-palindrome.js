/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var forward = '';
    var backward = '';
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (char.toLowerCase() !== char.toUpperCase() || (char >= '0' && char <= '9')) {
            forward += char.toLowerCase();
            backward = char.toLowerCase() + backward;
        }
    }
    // console.log(forward, backward);
    return forward === backward;
};