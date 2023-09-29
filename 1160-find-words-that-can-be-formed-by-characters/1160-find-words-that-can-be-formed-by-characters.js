/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let map = {}, sum = 0
    
    for (let char of chars) map[char] = (map[char] || 0) +1    

    words.forEach((word) => {
        let wordMap = {}
        for (let char of word) wordMap[char] = (wordMap[char] || 0) +1
        let pass = true
        for (let key in wordMap) {
            if (!(key in map) || wordMap[key] > map[key]) {
                pass = false
                break
            }
            // else if (wordMap[key] <= map[key]) {
            //     console.log(word, word.length)
            //     sum+=word.length
            // }
        }
        if (pass) sum+=word.length
    })
    return sum
};