/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target)
    
    for (let i=0; i< nums.length; i++) {
        if (nums[i] < target && nums[i+1] > target) {
            return i+1
        } else if (nums[i] < target && nums[i] === nums[nums.length-1]) {
            return i+1
        } else if (nums[i] > target) {
            return i
        }
    }
};