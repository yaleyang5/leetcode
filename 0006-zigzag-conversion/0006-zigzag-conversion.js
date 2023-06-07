/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // numRows === 1: 1 array, 0 backwards
    // numRows === 2: 2 arrays, 0 backwards
    // numRows === 3: 3 arrays, 1 backwards
    // numRows === 4: 4 arrays, 2 backwards
    // numRows === 5: 5 arrays, 3 backwards
    // numRows === 6: 6 arrays, 4 backwards
    if (numRows === 1) {
        return s;
    } else if (numRows === 2) {
        var str1 = "";
        var str2 = "";
        for (var i = 0; i < s.length; i++) {
            if (i % numRows === 0) {
                str1 += s[i];
            } else {
                str2 += s[i];
            }
        }
        return str1 + str2;
    } else {
        // create array of strings that will be joined at end
        // we want 0 1 2 1 0 1 2 1 0
        var arr = Array(numRows).fill('');
        var counter = 0;
        var direction = false;
        for (var i = 0; i < s.length; i++) {
            arr[counter] += s[i];
            if ((counter === 0 || direction) && counter !== numRows - 1) {
                counter++;
                direction = true;
            } else {
                counter--;
                direction = false;
            }
        }
        return arr.join('');
    }
};