/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = ""
    let m = word1.length, n = word2.length
    let i = 0
    let j = 0
    
    while (i < m || j < n) {
        if (i < m) {
            merged += word1[i]
            i +=1
        }
        if (j < n) {
            merged+= word2[j]
            j+=1
        }
    }
    
    return merged
//     while (i < word1.length && j < word2.length) {
//         merged+= word1[i]
//         i++
//         merged+= word2[j]
//         j++
//     }
//     if (i !== word1.length) {
//         merged += word1.slice(i)
//     }
//     if (j !== word2.length) {
//         merged += word2.slice(j)
//     }
    
//     return merged
};