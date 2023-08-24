/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {

    let res = 0
    for (let i=0; i<nums.length-2; i++) {
        if (nums.includes(nums[i] + diff) && nums.includes(nums[i] +diff*2)) res++
    }
    return res
};