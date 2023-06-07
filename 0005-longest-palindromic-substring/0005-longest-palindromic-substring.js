/**
 * @param {string} s
 * @return {string}
*/

var checkPalindrome = function(s) {
    if (s.length <= 1) {
        return true;
    }
    for (var i = 0; i < s.length/2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};

var longestPalindrome = function(s) {
    // sliding windows
    if (s.length <= 1) {
        return s;
    }
    var start = 0;
    var end = 0;
    var maxPalin = '';
    while (end < s.length && start <= end) {
        console.log(start, end)
        if (end < s.length - 1 && checkPalindrome(s.substring(start, end + 1))) {
            maxPalin = maxPalin.length > end - start + 1 ? maxPalin : s.substring(start, end + 1);
            end++;
        } else if (end === s.length - 1){
            if (checkPalindrome(s.substring(start, end + 1))) {
                maxPalin = maxPalin.length > end - start + 1 ? maxPalin : s.substring(start, end + 1);
            }
            start++;
        } else {
            var temp = start;
            for (var i = start; i < end; i++) {
                if (checkPalindrome(s.substring(i, end + 1))) {
                    maxPalin = maxPalin.length > end - i + 1 ? maxPalin : s.substring(i, end + 1);
                }
            }
            start = temp;
            end++
        }
    }
    return maxPalin;
};
