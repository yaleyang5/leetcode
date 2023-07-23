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
        var curr = t[i];
        if (tSet[curr] === undefined) {
            tSet[curr] = 0;
        }
        tSet[curr] += 1;
    }
    // console.log(tSet);
    var min = [0, s.length + 1];
    var sSet = {};
    for (var i = 0; i < s.length; i++) {
        // console.log(s.substring(l, i + 1));
        var end = s[i];
        if (sSet[end] === undefined) {
            sSet[end] = 0;
        }
        sSet[end] += 1;
        // console.log(sSet);
        var found = true;
        for (var key in tSet) {
            if (sSet[key] === undefined || sSet[key] < tSet[key]) {
                found = false;
            }
        }
        // iterate left until we find a character that is in tSet. record minimum, continue right pointer
        while (found && l <= i) {
            var start = s[l];
            // console.log("found!", l, i);
            if (tSet[start] !== undefined && sSet[start] !== undefined && tSet[start] <= sSet[start]) {
                if (min[1] - min[0] + 1 > i - l + 1) {
                    min[0] = l;
                    min[1] = i;
                }
            }
            sSet[start] -= 1;
            l++;
            if (l <= i && sSet[s[l - 1]] < tSet[s[l - 1]]) {
                found = false;
            }
        }
    }
    // console.log(min[0], min[1]);
    return min[1] === s.length + 1 ? "" : s.substring(min[0], min[1] + 1);
};