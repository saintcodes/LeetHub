/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0
    let index = 0
    while (index < nums.length) {
        count += nums[index]
        nums[index] = count
        index++
    }
    return nums
};