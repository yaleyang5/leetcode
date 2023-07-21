/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var set = new Set();
    var start = 0;
    var result = 0;
    
    for (var i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[start]);
            start++;
        }
        set.add(s[i]);
        result = Math.max(result, i - start + 1);
    }
    return result;
};