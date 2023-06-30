/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var unhappy = {};
    var nStr = String(n);
    while (nStr !== '1') {
        if (unhappy[nStr] === undefined) {
            unhappy[nStr] = nStr;
        } else {
            return false;
        }
        nStr = String(checkHappy(nStr));
    }
    return true;
};

var checkHappy = (n) => {
    // n will come as a string
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        var num = Number(n[i]);
        sum += num * num;
    }
    return sum;
}