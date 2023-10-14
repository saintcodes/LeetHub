/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let jewel = Array.from(jewels)
    for (let char of stones) {
        if (jewel.includes(char)) count++
    }
    return count
};