/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
       nums[i] % 2 === 0 ? ans.unshift(nums[i]) : ans.push(nums[i])
    }
    return ans
};