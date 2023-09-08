/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = [0], rightSum = [0]
    let sum = 0
    for (let i=0; i<nums.length-1; i++) {
        sum = sum+nums[i]
        leftSum.push(sum) 
    }
    sum = 0
    for (let i=nums.length-1; i>0; i--) {
        sum = sum+nums[i]
        rightSum.push(sum)
    }
    rightSum.sort((a,b) => b-a)
    
    let res = []
    for (let i=0; i< leftSum.length; i++) {
        res.push(Math.abs(leftSum[i] - rightSum[i]))
    }
    return res
    
};