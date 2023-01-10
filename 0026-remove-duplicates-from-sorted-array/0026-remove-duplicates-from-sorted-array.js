/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1
    let i = 1
    while (i < nums.length) {
        if (nums[i-1] !== nums[i]) {
            nums[count] = nums[i]
            count++
        }
        i++
    }
    return count
};