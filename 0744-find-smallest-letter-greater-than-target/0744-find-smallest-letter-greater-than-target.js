/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for (let i=0; i<letters.length; i++) {
        if (letters[i] < target) continue
        if (letters[i] === target && letters[i+1] === undefined) return letters[0]
        if (letters[i] > target) return letters[i]
    }    
    return letters[0]
};