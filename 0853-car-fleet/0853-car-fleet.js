/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // console.log(position);
    // console.log(speed);
    if (position.length <= 1) {
        return position.length;
    }
    var set = {};
    for (var i = 0; i < position.length; i++) {
        set[position[i]] = i;
    }
    position.sort((a, b) => (a - b));
    var newSpeed = new Array(speed.length);
    for (var i = 0; i < position.length; i++) {
        newSpeed[i] = speed[set[position[i]]];
    }
    speed = newSpeed;
    // console.log(position);
    // console.log(speed);
    var fleets = 0;
    var minTime = 0;
    for (var i = position.length - 1; i >= 0; i--) {
        var time = (target - position[i]) / speed[i];
        // console.log(position[i], speed[i], time, minTime);
        if (time > minTime) {
            minTime = time;
            fleets++;
        }
    }
    return fleets;
};