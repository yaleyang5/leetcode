/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // sliding window (looking for an anagram)
    if (s1.length > s2.length) {
        return false;
    }
    var count1 = {};
    for (var i = 0; i < s1.length; i++) {
        var temp = count1[s1[i]];
        count1[s1[i]] = temp ? temp + 1 : 1;
    }
    // console.log(count1);
    var start = 0;
    var count2 = {};
    for (var i = 0; i < s2.length; i++) {
        while (i - start + 1 <= s1.length) {
            var temp = count2[s2[i]];
            count2[s2[i]] = temp ? temp + 1 : 1;
            i++;
        }
        i--;
        // console.log(count2);
        for (var key in count1) {
            if (count1[key] !== count2[key]) {
                count2[s2[start]]--;
                start++;
                break;
            }
        }
        if (i - start + 1 === s1.length) {
            return true;
        }
    }
    return false;
};