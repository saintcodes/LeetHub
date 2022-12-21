/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            delete nums[i]
            count++
        }
    }
    return nums.sort().length - count
    // return nums.sort()
};