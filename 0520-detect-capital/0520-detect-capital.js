/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) return true
    if (word === word.toLowerCase()) return true
    
    let correct = true
    for (let i=word.length-1; i>0 ;i--) {
        
        if (word[i] !== word[i].toLowerCase()) {
            console.log(word[i], i)
            correct = false
            break
        }
    }
    return correct
};