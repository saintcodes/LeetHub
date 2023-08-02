/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let total = nums.reduce((c, a) => c+=a)
    let left = 1, right = Math.floor(total/maxOperations)

    //1, 2, 3, 4, 5, 6, 7
    //            l
    //            m
    //            r
    
    while (left < right) {
        let mid = Math.floor((left+right)/2), sum = 0
        for (let x of nums) sum+=Math.floor((x-1)/mid)
        console.log('l:', left, 'r:', right, 'mid:', mid, 'sum:', sum)
        if (sum > maxOperations) left = mid+1
        else right = mid
    }
    return left
    
};