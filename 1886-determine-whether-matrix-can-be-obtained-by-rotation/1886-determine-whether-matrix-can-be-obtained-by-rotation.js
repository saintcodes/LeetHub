/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    
    function rotate(mat) {
        mat.reverse()
        for (let i = 0; i<mat.length; i++) {
            for (let j = i+1; j<mat[i].length; j++) {
                let temp = mat[i][j]
                mat[i][j] = mat[j][i]
                mat[j][i] = temp
            }
        }
        return mat
    }
    
    function compare(mat, target) {
        for (let i=0; i<mat.length; i++) {
            for (let j=0; j< mat[i].length; j++) {
                if (mat[i][j] !== target[i][j]) {
                    return false
                }
            }
        }
        return true
    }
    
    let count = 4
    let rotatedMat = rotate(mat)
    while (count > 0) {
        if (compare(rotatedMat, target)) return true
        rotatedMat = rotate(rotatedMat)
        count--
    }
    return false
};