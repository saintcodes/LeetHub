/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let map = new Map()
    let max = candyType.length/2
    for (let i = 0; i < candyType.length; i++) {
        if (!map[candyType[i]]) map.set(candyType[i])
        else map[candyType[i]]
    }
    return Math.min(map.size, max)
    console.log(map, map.size, max)
};