/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    if (nums.length === 1) return nums

    let freq = new Object()
    for (let i = 0; i < nums.length; i ++) {
        freq[nums[i]] = (freq[nums[i]] || 0) +1
    }
    
    let arr = []
    
    for (let [key, value] of Object.entries(freq)) {
        arr.push([key, value])
    }
    
    arr.sort((a, b) => b[1] - a[1])
    let res = []
    console.log(arr)

    for (let i=0; i < k; i++) {
        res.push(arr[i][0])
    }
    
    return res    
};