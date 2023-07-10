/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let freq = {}
    for (let i=0; i<nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) +1
    }
    
    let arr = [], checks = []
    Object.entries(freq).forEach((entry) => arr.push(entry[1]))
    let degree = Math.max(...arr)
         
    for (let [key, value] of Object.entries(freq)) {
        if (value === degree) checks.push(+key)
    }
    //checks = [1,2]
    let possibles = []
    for (let i=0; i< checks.length; i++) {
        let first = nums.indexOf(checks[i])
        let last = nums.lastIndexOf(checks[i])
        possibles.push((last-first)+1)

    }    
    return Math.min(...possibles)
   
};