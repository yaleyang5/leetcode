
var TimeMap = function() {
    this.map = {};
    return this;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key] === undefined) {
        this.map[key] = [];
    }
    this.map[key].push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // arr points to the arr that has pairs of timestamps and values
    // console.log(this.map[key], timestamp);
    var arr = this.map[key];
    if (arr === undefined) {
        return "";
    }
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        if (arr[mid][0] > timestamp) {
            end = mid - 1;
        } else if (arr[mid][0] < timestamp) {
            start = mid + 1;
        } else {
            return arr[mid][1];
        }
    }
    // we want timestamp closest to original, but latest
    // console.log(start, mid, end);
    return timestamp < arr[0][0] ? "" : arr[end][1];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */