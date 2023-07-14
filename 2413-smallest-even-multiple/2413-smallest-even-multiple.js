/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let res = n
    // console.log(res)
    console.log(res%2!== 0)
    console.log(res % n == 0)
    while (res % 2 !== 0 && res % n === 0) {
        res += n
        // console.log(res, n)
    }
    return res
};