/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    
    let diff = Infinity
    nums.sort((a,b) => a-b)
    for (let i=0; i<nums.length-(k-1); i++) {
        let curr = nums[i+(k-1)]-nums[i]
        diff = Math.min(curr, diff)
    }
    
    return diff
};