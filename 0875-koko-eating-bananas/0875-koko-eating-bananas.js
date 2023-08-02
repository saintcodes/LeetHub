/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let n = piles.length
    let totalB = piles.reduce((c, a) => c+=a)
    // let left = 1, right = Math.max(...piles)
    let left = Math.floor(totalB/h), right = totalB
    //Input: piles = [3,6,7,11], h = 8
    //Output: 4
    
    //sum = 2,3,4,6
    // 1 , 2 , 3 , 4 , 5 , 6 , 7, 8, 9, 10, 11
    //             l
    //             m
    //             r
    
    while (left < right) {
        
        //mid equals the speed of acceptable range (left+right)/2
        let mid = Math.floor((left+right)/2)
        
        //hours equals the hours it will take koko to eat the bananas using mid(speed)
        let hours = 0
        for (let x of piles) hours+=Math.ceil(x/mid)
        
        //if 'hours'(consumed hours based on current speed) is greater than given h, we shorten our range         //by increasing left to mid+1 so we can eat at a greater speed
        if (hours > h) left = mid+1
        //else eat slower
        else right = mid
    }
    return left
};