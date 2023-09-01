
var Twitter = function() {
    this.maxPQ = new MaxPriorityQueue({priority: ({time}) => time});
    this.following = {};
    this.time = 0;
    return this;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.maxPQ.enqueue({userId: userId, tweetId: tweetId, time: this.time});
    this.time++;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (this.following[userId] === undefined) {
        this.following[userId] = {};
    }
    var res = [];
    var count = 10;
    this.maxPQ.toArray().forEach(({element}) => {
        if ((userId === element.userId || this.following[userId][element.userId]) && count > 0) {
            res.push(element.tweetId);
            count--;
        }
    })
    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (this.following[followerId] === undefined) {
        this.following[followerId] = {};
    }
    this.following[followerId][followeeId] = true;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.following[followerId] === undefined) {
        this.following[followerId] = {};
    }
    this.following[followerId][followeeId] = false;
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */