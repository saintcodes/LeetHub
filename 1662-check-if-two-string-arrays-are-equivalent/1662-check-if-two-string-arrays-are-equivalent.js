/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = '', str2 = ''
    for (let word of word1) {
        for (let letter of word) {
            str1 += letter
        }
    }
    for (let word of word2) {
        for (let letter of word) {
            str2 += letter
        }
    }
    return str1 === str2
};