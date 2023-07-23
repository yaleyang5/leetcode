/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) {
        return "";
    }
    
    var l = 0;
    var tSet = {};
    for (var i = 0; i < t.length; i++) {
        if (tSet[t[i]] === undefined) {
            tSet[t[i]] = 0;
        }
        tSet[t[i]] += 1;
    }
    // console.log(tSet);
    var min = [s.length + 1, ""];
    var sSet = {};
    for (var i = 0; i < s.length; i++) {
        // console.log(s.substring(l, i + 1));
        if (sSet[s[i]] === undefined) {
            sSet[s[i]] = 0;
        }
        sSet[s[i]] += 1;
        // console.log(sSet);
        var found = true;
        for (var key in tSet) {
            if (sSet[key] === undefined || sSet[key] < tSet[key]) {
                found = false;
            }
        }
        // iterate left until we find a character that is in tSet. record minimum, continue right pointer
        while (found && l <= i) {
            // console.log("found!", l, i);
            if (tSet[s[l]] !== undefined && sSet[s[l]] !== undefined && tSet[s[l]] <= sSet[s[l]]) {
                var str = s.substring(l, i + 1);
                var len = str.length;
                if (min[0] > len) {
                    min[0] = len;
                    min[1] = str;
                }
            }
            sSet[s[l]] -= 1;
            l++;
            if (l <= i && sSet[s[l - 1]] < tSet[s[l - 1]]) {
                found = false;
            }
        }
    }
    return min[1];
};