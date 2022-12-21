/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function(nums) {
    let total = 0
    let max = nums[0]
    for (i=0; i<nums.length; i++) {
        total += nums[i]
        console.log(total, max)
        if (total > max) {
            max = total
        }
        if (total < 0) {
            total = 0
        }
    }
    return max
};