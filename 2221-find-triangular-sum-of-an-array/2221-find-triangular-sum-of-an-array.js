/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let temp = []
    let times = nums.length-1
    
    while (times > 0) {
        for (let i=0; i<nums.length-1; i++) {
            temp.push((nums[i] + nums[i+1]) % 10)
        }
        nums = temp
        temp = []
        times--
    }
   return nums[0] 
};