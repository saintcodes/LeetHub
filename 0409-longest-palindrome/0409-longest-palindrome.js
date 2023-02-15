/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}
    let total = 0
    
    for (let i of s) {
        map[i] = (map[i] || 0) + 1
        // console.log(map)
        if (map[i] % 2 === 0) total+=2
    }
   
    // console.log(total)
    return s.length > total ? total+1:total
};

