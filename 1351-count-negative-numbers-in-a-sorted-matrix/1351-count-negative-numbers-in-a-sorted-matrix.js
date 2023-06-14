/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    for (let arr of grid) {
        for (num of arr) {
            if (num < 0) count+=1
        }
    }
    return count

};