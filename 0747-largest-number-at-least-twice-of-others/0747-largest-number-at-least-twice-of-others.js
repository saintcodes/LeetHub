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
    
    let max = nums[nums.length-1]
    let second = nums[nums.length-2]
    if (max >= second*2) return map[max]
    return -1
};