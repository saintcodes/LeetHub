/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let hash = {}
    let res = []
    for (let i=0; i<nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) +1
    }
    for (let key in hash) {
        if (hash[key] > nums.length/3) res.push(key)
    }
    return res
};