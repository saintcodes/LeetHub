/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let mid = 1
    let max = 0
    while (mid<s.length) {
        let left = s.slice(0, mid)
        let right = s.slice(mid, s.length)
        mid++
        
        let zeroes = [...left].reduce((total,x) => total+(x==0), 0)
        let ones = [...right].reduce((total, x) => total+(x==1), 0)
        if (zeroes+ones > max) max = zeroes+ones
            
    }
    return max
};