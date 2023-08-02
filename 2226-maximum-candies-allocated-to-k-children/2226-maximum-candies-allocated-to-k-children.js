/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let totalC = candies.reduce((c, n) => c+=n)
    if (totalC < k) return 0
    
    let left = 1, right = Math.max(...candies)
    while (left <= right) {
        console.log('left:', left, 'right:', right)
        let mid = Math.floor((left+right)/2)
        console.log('mid:', mid)
        let num = 0
        for (let x of candies) {
            num+=Math.floor(x/mid)
        
        }
        console.log(num)
        if (num < k) {
            right=mid-1
            console.log(right)
        }
    
        else left=mid+1
        // if (left > mid) return mid
    }
    return left-1
};