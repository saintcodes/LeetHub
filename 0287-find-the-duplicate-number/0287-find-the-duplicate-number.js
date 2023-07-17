/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i=0, j=i+1; i< nums.length; i++) {
        // console.log(nums[i], nums[j])
        j=i+1
        while (j<nums.length) {
            if (nums[j] === nums[i]) return nums[j]
            j++
        }  
        
    }
};