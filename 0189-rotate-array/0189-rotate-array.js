/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // let count = k
    // while (count) {
    //     nums.unshift(nums.pop(nums.length))
    //     count--
    // }
    
    // console.log(nums.slice(0, k+1))
    // console.log(nums.splice(k+1))
    // if (k > nums.length) k = k%nums.length
    // nums.unshift(...nums.splice(nums.length-k, nums.length-1))
    
    const len = nums.length
    k = (k % len)
    
    let end = nums.splice(len - k)

    nums.splice(0,0,...end)
};