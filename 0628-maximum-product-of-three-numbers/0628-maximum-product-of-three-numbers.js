/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    console.log(nums)
    nums.sort((a, b) => b-a)
    console.log(nums)
    return Math.max(nums[0]*nums[1]*nums[2], nums[nums.length-1]*nums[nums.length-2]*nums[0])
};