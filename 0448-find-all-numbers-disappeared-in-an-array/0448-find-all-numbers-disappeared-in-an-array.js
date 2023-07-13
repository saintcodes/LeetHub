/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let start = 1
    let res = []
    for (let i=0; i<nums.length; i++) {
        if (!nums.includes(start)) res.push(start)
        start++
    }
    return res
};