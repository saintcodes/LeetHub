/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    for (let i=0; i<rowIndex+1; i++) {
        let subArr = new Array(i+1)
        result.push(subArr)
        for (let j=0; j<result[i].length; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1
            } 
            else {
                result[i][j] = result[i-1][j] + result[i-1][j-1]
            }
        }
    }
    return result[result.length-1]
};