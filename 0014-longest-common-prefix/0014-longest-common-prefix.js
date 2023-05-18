/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""
    let sorted = strs.sort((a,b) => a.length-b.length)
    let first = sorted[0]
    let prefix = ''
   
    for (let char of first) {
        prefix+=char
        for (let i=1; i<sorted.length; i++) {
            if (!sorted[i].startsWith(prefix)) {
                prefix = prefix.slice(0, prefix.length-1)
                return prefix
            }
        }
    }
                  return prefix

};