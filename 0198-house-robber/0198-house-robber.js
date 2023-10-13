/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
//     let op1=0, op2=0
    
//     if (nums.length % 2 == 1) {
//         for (let i=0, j=1; i<nums.length; j+=2, i+=2) {
//             op1 += nums[i]
//             nums[j] ? op2 += nums[j] : op2
//         }
//     } else {
//         for (let i=0; i<nums.length ;i+=2) {
//             op1 += Math.max(nums[i], nums[i+1]) 
//         }
//     }
    
  
    
//     return Math.max(op1, op2)
    return nums.reduce((acc, cur) => [acc[1], Math.max(acc[1], acc[0] + cur)], [0, 0])[1]
};