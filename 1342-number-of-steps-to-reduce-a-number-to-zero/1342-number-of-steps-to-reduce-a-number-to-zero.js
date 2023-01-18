/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, count = 0) {
    //basic solution
    // count = 0
    // while (num > 0) {
    //     if (num % 2 === 1) {
    //         num = num - 1
    //         count++
    //     } else if (num % 2 === 0)  {
    //         num = num / 2
    //         count ++
    //     }
    // }
    // return count
    
    //recursive solution
         if (num === 0) return 0
    
    if (num % 2 === 0) {
        const count = numberOfSteps(num/2)
        return 1 + count
    } else {
        const count = numberOfSteps(num-1)
        return 1 + count
    }
};