/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        nums[i] = count
    }
    return nums
};