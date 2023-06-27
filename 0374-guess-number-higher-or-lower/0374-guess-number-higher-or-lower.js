/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 0
    let right = n
    
    while (left <= right) {
        let x = Math.floor((left+right) / 2)
        if (guess(x) == 0) return x
        else if (guess(x) == -1) right = x-1
        else left = x+1
    }
    
    
};