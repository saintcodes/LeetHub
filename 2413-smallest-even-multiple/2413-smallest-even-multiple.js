/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let res = n
    while (res % 2 !== 0 && res % n === 0) res += n
    
    return res
};