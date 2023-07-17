/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    let max = nums[nums.length-1]
    let secondMax = nums[nums.length-2]
    console.log(max, secondMax)
    return (max-1)*(secondMax-1)
};