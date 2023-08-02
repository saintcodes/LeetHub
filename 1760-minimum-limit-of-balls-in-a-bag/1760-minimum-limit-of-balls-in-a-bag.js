/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let total = nums.reduce((c, a) => c+=a)
    let left = 1, right = Math.floor(total/maxOperations)

    
    while (left < right) {
        let mid = Math.floor((left+right)/2)
        let sum = 0
        for (let x of nums) sum+=Math.floor((x-1)/mid)
        if (sum > maxOperations) left = mid+1
        else right = mid
    }
    return left
    
};