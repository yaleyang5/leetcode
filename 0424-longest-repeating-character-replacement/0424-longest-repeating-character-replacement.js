/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var maxWindow = -1;
    
    var letters = {};
    var start = 0;
    var max = -1;
    for (var end = 0; end < s.length; end++) {
        letters[s[end]] = letters[s[end]] === undefined ? 1 : letters[s[end]] + 1;
        max = Math.max(max, letters[s[end]]);
        while (max + k < end - start + 1) {
            letters[s[start]]--;
            start++;
        }
        maxWindow = Math.max(maxWindow, end - start + 1);
    }
    return maxWindow;
};