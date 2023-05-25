/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let freq = new Map()
    
    if (nums.length === 1) return nums
    
    for (let i = 0; i < nums.length; i ++) {
        freq[nums[i]] = (freq[nums[i]] || 0) +1
    }
    
    let arr = []
    
    for (let [key, value] of Object.entries(freq)) {
        arr.push([key, value])
    }
    
    // console.log(arr)
    arr.sort((a, b) => b[1] - a[1])
    let res = []
    // res.push(arr[arr.length-1][1], arr[arr.length-2][1])

    for (let i=0; i < k; i++) {
        res.push(arr[i][0])
    }
    
    return res    
};