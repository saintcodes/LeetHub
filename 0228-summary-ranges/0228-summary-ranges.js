/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = []
    
    if (nums.length === 1) {
        res.push(`${nums[0]}`)
        return res
    }
    
    let start = 0
    let end = 0

    for (let i=0; i<nums.length; i++) {
        
        if (nums[end+1] === nums[end] + 1) {
            end+=1
        }
        
        else if (nums[end+1] !== nums[i]+1) {
            end = nums[i]
            console.log(nums[start], end)
            if (nums[start] === end) {
                res.push(`${nums[start]}`)
            } else {
                res.push(`${nums[start]}->${end}`)
            }
            // console.log(nums[start], end, nums[end])
            start = i+1
            end = start
        }
    }
    return res
};