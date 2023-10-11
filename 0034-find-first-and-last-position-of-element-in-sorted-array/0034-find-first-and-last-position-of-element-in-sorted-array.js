/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
// [5,7,7,8,8,10]
//        l m  r
    
    let left = 0, right = nums.length-1
    let start = -1, end = -1
    while (left <= right) {
        let mid = Math.floor(left + (right-left)/2)
        if (nums[mid] === target) {
           start = end = mid
            while (start > 0 && nums[start-1] === target) start--
            while (end < nums.length && nums[end+1] === target) end++
            break
        }
        if (nums[mid] < target) left = mid+1
        else right = mid-1
    }
    return [start, end]
};