/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elSum = nums.reduce((curr, acc) => curr + acc)
    let digSum = 0
    for (let i=0; i<nums.length; i++) {
        if (nums[i].toString().length > 1) {
            // console.log(nums[i].toString().split(''))
            digSum+= nums[i].toString().split('').reduce((curr, acc) => +curr + +acc)
        } else {
            digSum+= nums[i]
        }
    }
    return elSum - digSum
};