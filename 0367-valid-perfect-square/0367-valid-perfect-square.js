/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let square = Math.sqrt(num)
    
    if (Number.isInteger(square)) {
        return square*square === num
    } else return false
    
};