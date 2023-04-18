/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
//     let merged = ""
//     let i = 0
//     let j = 0
    
    
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
    let length = Math.max(word1.length, word2.length), s = '';
    for(let i = 0; i < length; i++){
        s+= word1[i] || '';
        s+= word2[i] || '';
    }
    return s;
};