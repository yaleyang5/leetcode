/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // make each word an obj=> letter: amount
    // make an obj=> "abc123" => ["cab", "bac"]
    // return object.values(passwords)
    var anas = {};
    for (var str of strs) {
        var letters = {};
        var alpha = "";
        var nums = "";
        for (var char of str) {
            if (letters[char] === undefined) {
                letters[char] = 0;
                alpha += char;
            }
            letters[char]++;
        }
        alpha = alpha.split("").sort().join("");
        for (var i = 0; i < alpha.length; i++) {
            nums += String(letters[alpha[i]]) + ",";
        }
        console.log(alpha + nums);
        if (anas[alpha + nums] === undefined) {
            anas[alpha + nums] = [];
        }
        anas[alpha + nums].push(str);
    }
    return Object.values(anas);
};