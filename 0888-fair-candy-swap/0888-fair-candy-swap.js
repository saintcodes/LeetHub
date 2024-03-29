/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {

    let aliceSum = aliceSizes.reduce((a,b) => a+b)
    let bobSum = bobSizes.reduce((a,b) => a+b)
    let diff = (bobSum - aliceSum)/2
    
    for (let i=0; i<aliceSizes.length; i++) {
        let needFromBob = aliceSizes[i] + diff
        if (bobSizes.includes(needFromBob)) {
          return [aliceSizes[i], needFromBob]
        }
    }
    
};