
var MinStack = function() {
    this.stack = [];
    return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    var stackNode = []
    if (this.stack.length === 0) {
        stackNode.push(val);
    } else {
        stackNode.push(Math.min(this.stack[this.stack.length - 1][0], val));
    }
    stackNode.push(val);
    this.stack.push(stackNode);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */