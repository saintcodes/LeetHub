/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    
    let uniqueNums = new Set()
    
    for (char of s) {
        if (!isNaN(char)) uniqueNums.add(+char) 
    }
    
    if (uniqueNums.size < 2) return -1

    let arr = [...uniqueNums].sort()
    return arr[arr.length-2]
   
};