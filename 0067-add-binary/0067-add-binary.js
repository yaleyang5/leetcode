/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = '';
    var sum = 0;
    var carry = 0;
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        var n1 = i < a.length ? Number(a[a.length - 1 - i]) : 0;
        var n2 = i < b.length ? Number(b[b.length - 1 - i]) : 0;
        var sum = n1 + n2 + carry;
        carry = 0;
        if (sum === 0) {
            result = '0' + result;
        } else if (sum === 1) {
            result = '1' + result;
        } else if (sum === 2) {
            result = '0' + result;
            carry = 1;
        } else {
            result = '1' + result;
            carry = 1;
        }
    }
    return carry === 0 ? result : '1' + result;
};