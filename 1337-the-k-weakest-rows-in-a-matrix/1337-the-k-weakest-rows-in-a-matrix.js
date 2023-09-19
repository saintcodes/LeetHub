/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let map = [], res = []
    for (let idx=0; idx<mat.length; idx++) {
        if (mat[idx].indexOf(0) == -1) {
            map.push([idx, mat[idx].length])
        } else map.push([idx, mat[idx].indexOf(0)])

    }
    console.log(map)
    map.sort((a,b) => a[1] - b[1])
    console.log(map)
    let idx = 0
    while (k != 0) {
        res.push(map[idx][0])
        idx++
        k--
    }
    return res
};