/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {}
    for (num of nums) {
        map[num] = (map[num] || 0) +1
    }
    for (el in map) {
        if (map[el] === 1) {
            return Number(el)
        }
    }
};