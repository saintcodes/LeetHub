/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    // let result = []
    // for (let kid in candies) {
    //     candies[kid]+= extraCandies
    //     if (candies[kid] === Math.max(...candies)) {
    //         result.push(true)    
    //     } else {
    //         result.push(false)
    //     }
    //     candies[kid]-= extraCandies
    // }
    // return result  
    let possibilities = new Array(candies.length).fill(false);

    const currentMax = Math.max(...candies);

    candies.forEach((currentCandies, index) => {
        if(currentCandies+extraCandies >= currentMax) {
            possibilities[index] = true;
        }
    })

    return possibilities;
};