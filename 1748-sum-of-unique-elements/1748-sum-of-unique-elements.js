/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let counter = {}
    let sum = 0
    nums.forEach((num) => {
        counter[num] = (counter[num] || 0) +1
    })
    
    for (let key in counter) {
        if (counter[key] == 1) sum+= +key
    }
    
    return sum
};

