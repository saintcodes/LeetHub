/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    // if (nums.length == k) return 0
    
    let diff = Infinity
    nums.sort((a,b) => a-b)
    console.log(nums)
    for (let i=0; i<nums.length-(k-1); i++) {
        console.log('hi', nums[i+(k-1)], nums[i])
        diff = Math.min(nums[i+(k-1)]-nums[i], diff)
        console.log('diff', diff)
    }
    return diff
};