/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if (board === undefined || typeof board !== 'object' || board[0] === undefined || board.length !== 9 || board[0].length !== 9) {
        return false;
    }
    // create boxes array
    var boxes = [];
    for (var i = 0; i < 9; i++) {
        boxes.push({});
    }
    // console.log(boxes);
    // check rows and columns
    for (var i = 0; i < 9; i++) {
        var checkedH = {};
        var checkedV = {};
        for (var j = 0; j < 9; j++) {
            var curr = board[i][j];
            var currV = board[j][i];
            var boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
            // console.log(boxNum);
            // check horizontal
            if (curr === '.') {
                // do nothing
            } else if (checkedH[curr] === undefined) {
                checkedH[curr] = curr;
            } else {
                // console.log('horizontal');
                // console.log(checkedH, curr);
                return false;
            }
            // check vertical
            if (currV === '.') {
                // do nothing
            } else if (checkedV[currV] === undefined) {
                checkedV[currV] = currV;
            } else {
                // console.log('vertical');
                return false;
            }
            // check boxes
            if (curr === '.') {
                // do nothing
            } else if (boxes[boxNum][curr] === undefined) {
                boxes[boxNum][curr] = curr;
            } else {
                // console.log('box');
                return false;
            }
        }
    }
    
    return true;
    
    // 0  1  2  | 3  4  5  | 6  7  8  |
    // 9  10 11 | 12 13 14 | 15 16 17 |
    // 18 19 20 | 21 22 23 | 24 25 26 |
    // 27 28 29 | 30 31 32 | 33 34 35 |
    // ...
};