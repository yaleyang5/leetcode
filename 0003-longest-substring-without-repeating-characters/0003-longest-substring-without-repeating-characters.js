/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === undefined) {
        return 0;
    }
    var len = s.length;
    if (len <= 1) {
        return len;
    }
    if (len === 2) {
        return s[0] !== s[1] ? 2 : 1;
    }
    var first = 0;
    var last = 1;
    var max = 1;
    var letters = {};
    letters[s[0]] = 1;
    while (first <= last && last < s.length) {
        // console.log(first, last, letters, max);
        if (letters[s[last]] > 0) {
            letters[s[last]]++;
            while(letters[s[last]] !== 1) {
                letters[s[first]] -= 1;
                first++;
            }
        } else {
            letters[s[last]] = 1;
            max = Math.max(max, last - first + 1);
        }
        last++;
    }
    return max;
};