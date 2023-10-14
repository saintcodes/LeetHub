/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0, map = {}
    let jewel = Array.from(jewels)
    for (let char of stones) {
        map[char] = (map[char] || 0) +1
    }
    // console.log(map)
    for (let key in map) {
        if (jewel.includes(key)) count+=map[key]
    }
    return count
};