/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let map = {}, sum = 0
    
    for (let char of chars) map[char] = (map[char] || 0) +1    

    words.forEach((word) => {
        let wordMap = {}, pass = true
        for (let char of word) wordMap[char] = (wordMap[char] || 0) +1
        for (let key in wordMap) {
            if (!(key in map) || wordMap[key] > map[key]) {
                pass = false
                break
            }
        }
        if (pass) sum+=word.length
    })
    return sum
};