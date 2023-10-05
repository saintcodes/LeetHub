/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1 = 0, count2 = 0, num1 = 0, num2 = 0
    let res = [], threshold = nums.length/3
    
    for (let num of nums) {
        if (count1 == 0 && num !== num2) {
            count1 = 1
            num1 = num
        } else if (count2 == 0 && num !== num1) {
            count2 = 1
            num2 = num
        } 
        else if (num1 == num) count1++
        else if (num2 == num) count2++
        else {
            count1--
            count2--
        }
    }
    count1 = 0, count2 = 0
    for (let num of nums) {
        if (num1 == num) count1++
        else if (num2 == num) count2++
    }
    
    if (count1 > threshold) res.push(num1)
    if (count2 > threshold) res.push(num2)

    return res
};

    // let hash = {}
    // let res = []
    // for (let i=0; i<nums.length; i++) {
    //     hash[nums[i]] = (hash[nums[i]] || 0) +1
    // }
    // for (let key in hash) {
    //     if (hash[key] > nums.length/3) res.push(key)
    // }
    // return res