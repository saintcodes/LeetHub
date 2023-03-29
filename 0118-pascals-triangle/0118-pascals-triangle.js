/**
 * @param {number} numRows
 * @return {number[][]}
 */


var generate = function(numRows) {
    // if (numRows.length === 1) return [[1]]
    // if (numRows.length === 2) return [[1], [1,1]]

    let result = []
    for (let i=0; i<numRows; i++) {
        let subArr = new Array(i+1)
        result.push(subArr)
        for (let j=0; j<=i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1
            } else {
                result[i][j] = result[i-1][j-1] + result[i-1][j]
            }
        }
    }
    return result
};