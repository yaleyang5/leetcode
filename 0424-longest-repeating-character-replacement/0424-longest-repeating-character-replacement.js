/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var count = {};
    var maxLength = 0;
    
    var start = 0;
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1;
        max = Math.max(max, count[s[i]]);
        
        while (i - start + 1 - max > k) {
            count[s[start]]--;
            start++;
        }

        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};