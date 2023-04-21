/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let result = []
    for (let kid in candies) {
        candies[kid]+= extraCandies
        if (candies[kid] === Math.max(...candies)) {
            result.push(true)    
        } else {
            result.push(false)
        }
        candies[kid]-= extraCandies
    }
    return result    
};