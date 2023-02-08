/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// ransomeNote, aa
// magazine,    ab

// magazine
// a: 1
// b: 1

var canConstruct = function(ransomNote, magazine) {
    let map = new Map
    
    for (el of magazine) {
        map[el] = (map[el] || 0) +1
    }
    
    for (letter of ransomNote) {
        if (letter in map) {
            map[letter] -=1
            if (map[letter]<0) return false
        } else {
            return false
        }
    }
    return true
};