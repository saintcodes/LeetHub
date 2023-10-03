/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    for (let i=0, j = nums.length-1; i<nums.length-1; i++) {
        while (j > i) {
            if (nums[i] == nums[j] && i < j) {
                count++; j--;
            } else j--
        }
        j = nums.length-1
    }
    return count
};