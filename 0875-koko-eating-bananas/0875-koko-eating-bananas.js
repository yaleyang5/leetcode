/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    piles.sort((a, b) => (a - b));
    var start = 1;
    var end = piles[piles.length - 1];
    var min = end;
    
    var timeToEat = (k) => {
        var hrs = 0;
        for (var i = 0; i < piles.length; i++) {
            hrs += Math.ceil(piles[i] / k);
        }
        return hrs;
    }
    
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        var time = timeToEat(mid);
        if (time <= h) {
            min = Math.min(min, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return min;
};
    
