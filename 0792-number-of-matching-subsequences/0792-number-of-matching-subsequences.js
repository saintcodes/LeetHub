/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let res = 0
    for (let word of words) {
        if (word.length > s.length) break
        
        let i=0, j=0
        while (i<s.length && j<word.length) {
            if (s[i] == word[j]) {
                i++
                j++
            } else {
                i++ 
            }
        }
        if (j == word.length) {
            res++
            i=0, j=0
        }
    }
    return res
};