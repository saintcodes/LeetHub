/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    // if (nums.includes(0)) return 0
    
    let product = nums.reduce((a,b) => a*b)
    // let product = 1
    // for (let i=0; i<nums.length; i++) {
    //     product*=nums[i]
    // }
    
    function signFunc(num) {
        if (num > 0) return 1
        if (num < 0) return -1
        else return 0
    }
    
    return signFunc(product)
};