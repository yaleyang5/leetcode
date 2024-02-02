/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var maxWindow = -1;
    
    var letters = {};
    var keys = [];
    var end = 0;
    for (var start = 0; start < s.length; start++) {
        if (keys.length === 0) {
            for (var i = start; i <= end; i++) {
                if (letters[s[i]] === undefined) {
                    letters[s[i]] = 0;
                    keys.push(s[i]);
                }
                letters[s[i]]++;
            }
        } else {
            letters[s[start - 1]]--;
        }
        // console.log(letters);
        var max = -1;
        for (var key of keys) {
            max = Math.max(max, letters[key]);
        }
        while (max + k >= end - start + 1 && end < s.length) {
            if (k === 0 && max !== end - start + 1) {
                break;
            }
            maxWindow = Math.max(maxWindow, end - start + 1);
            end++;
            if (letters[s[end]] === undefined) {
                letters[s[end]] = 0;
                keys.push(s[end]);
            }
            letters[s[end]]++;
            for (var key of keys) {
                max = Math.max(max, letters[key]);
            }
        }
        letters[start]--;
    }
    return maxWindow;
};