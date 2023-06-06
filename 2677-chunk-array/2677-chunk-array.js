/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let subArr = []
    let res = []
    
    for (let i=0; i<arr.length; i+=size) {
        subArr.push(arr.slice(i, i+size))
        // res.push(subArr)
    }
    return subArr
};