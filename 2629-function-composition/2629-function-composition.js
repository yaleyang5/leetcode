/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    var result = functions !== undefined && functions.length > 0 ? functions[functions.length - 1] : (x) => x;
	return function(x) {
        result = result(x);
        for(var i = functions.length - 2; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */