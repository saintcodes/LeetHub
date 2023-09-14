/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let base = +n.toString(10)
    let num = base.toString(2)
    let count = 0
    for (let dig of num) {
        if (dig == '1') count++
    }
    return count
};