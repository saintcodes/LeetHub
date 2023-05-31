/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let mappedArray = []
    for (let i=0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i], i))  
    }
    
    return mappedArray

};