/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let map = {}
    for (let i=0;i<nums.length; i++) {
        map[nums[i]] = i
    }
    
    nums.sort((a,b) => a-b)
    
    if (nums[nums.length-1] >= (nums[nums.length-2])*2) return map[nums[nums.length-1]]
    return -1
};