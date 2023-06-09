/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // create object of ints
    var nums = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    }
    // create result string, starting index, positive bool
    var result = '';
    var start = 0;
    var pos = 1;
    var hit = false;
    // find start
    while (typeof nums[s[start]] !== 'number' && start < s.length) {
        console.log(start, s[start])
        if (hit === true && typeof nums[s[start]] !== 'number') {
            return 0;
        } else if (s[start] === '+') {
            // if positive
            pos = 1;
            hit = true;
        } else if (s[start] === '-') {
            // if negative
            pos = -1;
            hit = true;
        } else if (s[start] === ' ') {
            // console.log('skipping forward');
        } else if (typeof nums[s[start]] !== 'number') {
            // we reach here only if not a white space or ±, meaning it is a character
            return 0;
        }
        start++;
    }
    // iterate through s until character is hit
    var i = start;
    while (i < s.length && typeof nums[s[i]] === 'number') {
        result += s[i];
        i++
        // if not a number, continue
    }
    // range: [-2147483648, 2147483647]
    // check if number is within range, return either ±result or 2147483647
    var resultInt = BigInt(result);
    if (resultInt <= 2147483647 && resultInt >= -2147483648) {
        return pos * Number(result);
    } else if (pos === 1) {
        return 2147483647;
    } else {
        return -2147483648;
    }
};