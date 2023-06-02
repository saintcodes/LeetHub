/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let dict = new Map()
    let letters = pattern.split('')
    let words = s.split(' ')
    
    //checks if lengths of pattern and s is the same; if not, return false
    if (letters.length !== words.length) return false
    
    //assigns key of each letter to a word if it doesn't exist in dict
    //if the key exists and is not equal to the word, return false
    for (let i=0; i<words.length;i++) {
        if (!dict[letters[i]]) dict[letters[i]] = words[i]
        if (dict[letters[i]] !== words[i]) return false    
    }
    
    //turns the array of [a,b,b,a] and ['dog', 'dog', 'dog', 'dog'] into a unique set
    // => [a,b] and ['dog']
    let lettersSet = new Set(letters)
    let wordsSet = new Set(words)
    
    //evaluates size of each set and compares; if equal, return true, else false
    return wordsSet.size === lettersSet.size
 
};