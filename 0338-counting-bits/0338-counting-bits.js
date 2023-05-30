/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []
    
    for (let i=0; i < n+1; i++) {
        let binary = i.toString(2)
        let count = 0
    
        for (digit of binary) {
            if (digit === '1') count++
        }
        
        ans[i] = count
    }
    return ans
};