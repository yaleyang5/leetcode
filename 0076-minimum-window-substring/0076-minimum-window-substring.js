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
    var have = 0;
    var need = 0;
    var sSet = {};
    var tSet = {};
    var result = [0, s.length];
    var len = s.length + 1;
    for (var i = 0; i < t.length; i++) {
        var curr = t[i];
        if (tSet[curr] === undefined) {
            tSet[curr] = 0;
            need++;
        }
        tSet[curr]++;
    }
    // console.log(tSet, need);
    for (var r = 0; r < s.length; r++) {
        var temp = s[r];
        if (sSet[temp] === undefined) {
            sSet[temp] = 0;
        }
        sSet[temp]++;
        if (sSet[temp] === tSet[temp]) {
            have++;
        }
        while (have === need) {
            var firstChar = s[l]
            // record length
            if (len > r - l + 1) {
                len = r - l + 1;
                result = [l, r];
            }
            // check and remove first char
            if (sSet[firstChar] === tSet[firstChar]) {
                have--;
            }
            sSet[firstChar] -= 1;
            l++;
        }
    }
    return len === s.length + 1 ? "" : s.substring(result[0], result[1] + 1);
};