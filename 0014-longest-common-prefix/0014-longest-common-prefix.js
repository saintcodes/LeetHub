/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""
    // strs.sort((a,b) => a.length-b.length)
    let first = strs[0]
    let prefix = ''
   
    for (let char of first) {
        prefix+=char
        for (let i=1; i<strs.length; i++) {
            if (!strs[i].startsWith(prefix)) {
                prefix = prefix.slice(0, prefix.length-1)
                return prefix
            }
        }
    }
    return prefix
};