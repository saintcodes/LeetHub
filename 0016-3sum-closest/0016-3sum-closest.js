/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let sum = Infinity
    
    for (let i=0; i< nums.length; i++) {
        let left = i+1, right = nums.length-1
        
        while (left < right) {
            
            let currSum = nums[i] + nums[left] + nums[right]
            if (Math.abs(currSum-target) < Math.abs(sum-target)) sum = currSum
            if (currSum > target) {
                right--
            } else if (currSum < target) {
                left++
            } else {
                return currSum
            }
        }
    }
    return sum
};