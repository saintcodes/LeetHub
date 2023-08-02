/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let totalC = candies.reduce((c, n) => c+=n)
    if (totalC < k) return 0
    
    let left = 1, right = Math.floor(totalC/k)
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        let num = 0
        for (let x of candies) num+=Math.floor(x/mid)
        
        if (num < k) right=mid-1
        else left=mid+1
    }
    return left-1
};