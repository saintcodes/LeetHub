/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let map = {}
    for (let i=0; i<nums.length; i++) {
        let maxDigit = Math.max(...nums[i].toString())
        if (map[maxDigit]) map[maxDigit].push(nums[i])
        else map[maxDigit] = [nums[i]]
    }
    let max = 0
    for (let key in map) {
        if (map[key].length > 1) {
            let arr = map[key].sort((a,b) => a-b)
            let sum = arr[arr.length-1] + arr[arr.length-2]
            if (sum > max) max = sum
        }
    }
    return max || -1
    
}
   