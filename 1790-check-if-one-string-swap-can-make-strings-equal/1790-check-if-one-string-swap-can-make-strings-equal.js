/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true
    let arr = s1.split("")
    let diff = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff.push(i)
    }
    if (diff.length>2) return false
    
    let first = arr[diff[0]]
    arr[diff[0]] = arr[diff[1]]
    arr[diff[1]] = first
    if (arr.join('') === s2) return true
    
    return false
};