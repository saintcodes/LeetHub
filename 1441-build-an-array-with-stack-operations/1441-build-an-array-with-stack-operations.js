/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [], index = 0
    for (let i=1; i<=n; i++) {
         if (i == target[target.length-1]) {
            res.push("Push")
            return res
        }
        
        if (i == target[index]) {
            res.push("Push"); index++
        } else res.push("Push", "Pop")
        
    }
    
    return res
};