/**
 * @param {number} numRows
 * @return {number[][]}
 */


var generate = function(numRows) {
    let result = []
    for (let i=0; i<numRows; i++) {
        let subArr = new Array(i+1)
        result.push(subArr)
        for (let j=0; j<result[i].length; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1
            } else {
                result[i][j] = result[i-1][j] + result[i-1][j-1]
            }
        }
    }
    return result
};