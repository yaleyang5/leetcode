/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var firstChar = needle[0];
    for (var i = 0; i < haystack.length; i++) {
        if (firstChar === haystack[i]) {
            if (needle === haystack.slice(i, i + needle.length)) {
                return i;
            }
        }
    }
    return -1;
};