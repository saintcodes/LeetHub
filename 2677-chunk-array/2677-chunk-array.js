/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let subArr = []
    
    for (let i=0; i<arr.length; i+=size) {
        subArr.push(arr.slice(i, i+size))
    }
    
    return subArr
};