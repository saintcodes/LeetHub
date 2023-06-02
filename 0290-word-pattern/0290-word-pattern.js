/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let dict = new Map()
    let letters = pattern.split('')
    let words = s.split(' ')
    
    if (letters.length !== words.length) return false
    
    for (let i=0; i<words.length;i++) {
        if (!dict[letters[i]]) dict[letters[i]] = words[i]
        if (dict[letters[i]] !== words[i]) return false    
    }
    
    let lettersSet = new Set(letters)
    let wordsSet = new Set(words)
    
    console.log(lettersSet, wordsSet)

    return wordsSet.size === lettersSet.size
 
    console.log(dict)
};