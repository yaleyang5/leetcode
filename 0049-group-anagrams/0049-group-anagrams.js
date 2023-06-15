/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var result = [];
    for (var i = 0; i < strs.length; i++) {
        // console.log(result)
        if (result.length === 0) {
            result.push([strs[i]]);
        } else {
            var found = false;
            for (var j = 0; j < result.length; j++) {
                if (isAnagram(strs[i], result[j][0])) {
                    result[j].push(strs[i]);
                    found = true;
                    break;
                }
            }
            if (!found) {
                result.push([strs[i]]);
            }
        }
    }
    return result;
};

var isAnagram = (w1, w2) => {
    if (w1.length !== w2.length) {
        return false;
    }
    var sortedStr1 = w1.split('').sort().join('');
    var sortedStr2 = w2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}