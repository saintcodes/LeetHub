/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(num) {
//     let ans = []
    
//     for (let i=0; i < n+1; i++) {
//         let binary = i.toString(2)        
//         let count = 0
        
//         for (digit of binary) {
//             if (digit == '1') count++
//         }
//         ans.push(count)
//     }
//     return ans
    let dp = new Array(num+1);
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    
    if (num < 3) {
        return dp.slice(0, num+1);
    }
    
    let c = 2;
    
    for (let i = 3; i <= num; i++) {
        if (i == c*2) {
            c = c*2;
            dp[i] = 1;
        } else {
            dp[i] = dp[c] + dp[i-c];
        }
    }
    
    return dp;
};