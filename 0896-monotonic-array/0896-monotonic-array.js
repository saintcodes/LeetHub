/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let decrease=true, increase=true

    for (let i=1; i<nums.length; i++) {
        if (nums[i-1] < nums[i]) decrease = false
        if (nums[i-1] > nums[i]) increase = false
        if (!decrease && !increase) return false
    }
    return decrease || increase
};