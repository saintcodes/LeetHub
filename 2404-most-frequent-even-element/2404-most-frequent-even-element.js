/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let hash = new Map()
    for (let i=0; i<nums.length; i++) {
       
        if (nums[i] % 2 === 1) {
            continue   
        } else if (nums[i] % 2 === 0) {
            hash[nums[i]] = (hash[nums[i]] || 0) +1        
        }
    }
    
    if (!Object.entries(hash)) return -1
    
    let arr = Object.keys(hash).sort((a, b) => hash[b] - hash[a]).map(Number);
    if (arr.length === 0) return -1
    let first = arr.shift()
    let second = arr.shift()
    
    if (first && second && hash[first] === hash[second] && first > second) {
        return second
    }
    return first    

};