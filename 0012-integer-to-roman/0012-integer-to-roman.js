/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num === 0) {
        return '';
    } else if (num === 1) {
        return 'I';
    } else if (num === 4) {
        return 'IV';
    } else if (num === 5) {
        return 'V';
    } else if (num === 9) {
        return 'IX';
    } else if (num === 10) {
        return 'X';
    } else if (num === 40) {
        return 'XL';
    } else if (num === 50) {
        return 'L';
    } else if (num === 90) {
        return 'XC';
    } else if (num === 100) {
        return 'C';
    } else if (num === 400) {
        return 'CD';
    } else if (num === 500) {
        return 'D';
    } else if (num === 900) {
        return 'CM';
    } else if (num === 1000) {
        return 'M';
    }
    var result = '';
    // recursively take away highest number!
    var count = 0;
    while (num >= 1000) {
        // console.log(1000, num);
        result += 'M';
        num -= 1000;
        if (num < 0) {
            return result.substring(0, result.length - 1) + intToRoman(num + 1000);
        } else if (num === 0) {
            return result;
        } else if (num < 1000) {
            return result + intToRoman(num);
        }
    }
    while (num >= 100) {
        result += 'C';
        num -= 100;
        count++;
        // console.log(100, num, count);
        if (num < 0) {
            // count is over by 1 (at least 2, since num starts >= 100)
            if (count < 5) {
                return result.substring(0, result.length - 1) + intToRoman(num + 100);
            } else if (count === 5) {
                return 'ID' + intToRoman(num + 100);
            } else if (count === 6) {
                return 'D';
            } else if (count === 10) {
                return 'CM';
            } else {
                return 'D' + result.substring(5, result.length - 1) + intToRoman(num + 100);
            }
        } else if (num < 100) {
            if (count < 4) {
                return result.substring(0, result.length) + intToRoman(num);
            } else if (count === 4) {
                return 'CD' + intToRoman(num);
            } else if (count === 5) {
                return 'D' + intToRoman(num);
            } else if (count === 9) {
                return 'CM' + intToRoman(num);
            } else {
                return 'D' + result.substring(5) + intToRoman(num);
            }
        }
    }
    while (num >= 10) {
        result += 'X';
        num -= 10;
        count++;
        console.log(10, num, count);
        if (num < 0) {
            // count is over by 1 (at least 2, since num starts >= 10)
            if (count < 5) {
                return result.substring(0, result.length - 1) + intToRoman(num + 10);
            } else if (count === 5) {
                return 'XL' + intToRoman(num + 10);
            } else if (count === 6) {
                return 'L';
            } else if (count === 10) {
                return 'XC';
            } else {
                return 'L' + result.substring(5, result.length - 1) + intToRoman(num + 10);
            }
        } else if (num < 10) {
            if (count < 4) {
                return result.substring(0, result.length) + intToRoman(num);
            } else if (count === 4) {
                return 'XL' + intToRoman(num);
            } else if (count === 5) {
                return 'L' + intToRoman(num);
            } else if (count === 9) {
                return 'XC' + intToRoman(num);
            } else {
                return 'L' + result.substring(5) + intToRoman(num);
            }
        }
    }
    while (num >= 0) {
        // console.log(1, num);
        result += 'I';
        num -= 1;
        count++;
        if (num === 0) {
            if (count < 4) {
                return result;
            } else if (count === 4) {
                return 'IV';
            } else if (count === 5) {
                return 'V';
            } else if (count === 9) {
                return 'IX';
            } else {
                return 'V' + result.substring(5);
            }
        }
    }
    return result;
};