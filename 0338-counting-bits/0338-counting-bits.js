/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var arr = [];
    for (var i = 0; i <= n; i++) {
        arr.push(numOfOnes(convertToBinary(i)));
    }
    return arr;
};

var convertToBinary = (n) => {
    if (n === 0) {
        return '0';
    }
    if (n === 1) {
        return '1';
    } if (n === 2) {
        return '10';
    }
    // convert n to binary
    var power = 0;
    while (Math.pow(2,power) <= n) {
        power++;
    }
    var str = '';
    power--;
    while (n !== 0 && power >= 0) {
        // console.log(n, power, str);
        var twoPow = Math.pow(2,power);
        if (twoPow <= n) {
            n -= twoPow;
            str += '1';
        } else {
            str += '0';
        }
        power--;
    }
    
    return str;
};

var numOfOnes = (binaryString) => {
    var count = 0;
    for (var i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            count++;
        }
    }
    return count;
};

