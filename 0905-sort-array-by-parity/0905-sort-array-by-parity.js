/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArrayByParity = function(nums) {
    
var sortArrayByParity = A => A.filter(e=>e%2==0).concat(A.filter(e=>e%2==1))
    // let ans = []
    // for (let i = 0; i < nums.length; i++) {
    //    nums[i] % 2 === 0 ? ans.unshift(nums[i]) : ans.push(nums[i])
    // }
    // return ans
// };