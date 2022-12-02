/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let hash = {}
    let n = nums.length/2
    for (let i of nums) {
        if (!hash[i]) {
            hash[i] = 0
        }
            hash[i]++
    }
    for (i in hash) {
        if (hash[i] > n) {
            return i
        }
    }
};