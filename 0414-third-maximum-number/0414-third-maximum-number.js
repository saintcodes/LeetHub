/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let sorted = [...new Set(nums)].sort((a,b) => b-a)
    return sorted.length < 3 ? sorted[0] : sorted[2]
    
//     if (nums.length === 1) return nums[0]
    
//     let numsSet = new Set()
    
//     let max = Infinity
//     let second = Infinity
//     let third = -Infinity
    
//     for (let x of nums) {
//         numsSet.add(x)
//     }
//     const [first, sec] = numsSet
    
//     if (numsSet.size === 2) return Math.max(first, sec)

//     for (let val of numsSet) {
//         if (val > third) {
//             third = val
//         } else {
//             second = third
//             third = val
//         }
//         if (val > second) {
//             max = val
//         } else {
//             max 
//         }
//     }
//     console.log(max, second, third)
};