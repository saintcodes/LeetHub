/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    if (nums.length == 2) return Math.min(nums[0], nums[1])
    
    let temp = [], flip = true, count = (nums.length/2)-1
    // console.log(count, flip)

    while (nums.length >=2) {
        // console.log(count, flip)
        for (let i=0; i< nums.length-1; i+=2) {
            if (flip) temp.push(Math.min(nums[i], nums[i+1]))
            else temp.push(Math.max(nums[i], nums[i+1]))
            flip = !flip
            // console.log(temp, nums)
        }
        nums = temp
        temp = []
        // count--
    }
    return nums[0]
};