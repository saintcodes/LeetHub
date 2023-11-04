/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0, hash = {}
    
    for (let i=1; i<=k; i++) hash[i] = 1
    
    for (let i=nums.length-1; i>=0; i--) {
        
        if (Object.keys(hash).length == 0) break
        
        if (nums[i] in hash) {
            delete hash[nums[i]]
            count++
            console.log(count, nums[i])
        } else count++
    
    }
    return count
    
};