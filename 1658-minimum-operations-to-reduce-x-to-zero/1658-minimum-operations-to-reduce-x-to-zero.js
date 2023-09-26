/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {

    const sum = nums.reduce((r, n) => r + n)
    const diff = sum-x
    let current = 0, res = -1
    
    for (let l = 0, r = 0; r < nums.length; r++) {
        current += nums[r]
        while (current > diff) {
            current -= nums[l]
            l++
        }
        if (current === diff) res = Math.max(res, (r-l)+1)
    }
    return res === -1 ? -1 : nums.length-res
}