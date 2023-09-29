/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let decrease=true, increase=true

    // i-1, i
    // [1,  2,  2,  3]
    // inc =
    // dec = false
    for (let i=1; i<nums.length; i++) {
        if (nums[i-1] < nums[i]) decrease = false
        if (nums[i-1] > nums[i]) increase = false
    }
    return decrease || increase
};