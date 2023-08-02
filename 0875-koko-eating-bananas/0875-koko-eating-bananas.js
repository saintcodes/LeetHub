/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let n = piles.length
    let totalB = piles.reduce((c, a) => c+=a)
    let left = 1, right = Math.max(...piles)
    
    //Input: piles = [3,6,7,11], h = 8
    //Output: 4
    
    //sum = 2,3,4,6
    // 1 , 2 , 3 , 4
    // l
    //     m
    //             r
    
    console.log(left, right, totalB)
    while (left < right) {
        let mid = Math.floor((left+right)/2)
        let sum = 0
        for (let x of piles) sum+=Math.ceil(x/mid)
        
        if (sum > h) left = mid+1
        else right = mid
    }
    return left
};