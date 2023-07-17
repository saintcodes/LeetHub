/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => a-b)
    let max = nums[nums.length-1]
    let secondMax = nums[nums.length-2]
    return (max-1)*(secondMax-1)
};