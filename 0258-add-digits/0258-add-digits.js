/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString();
    while (num.length !== 1) {
        num = num.split('').reduce((curr, acc)=>+curr + +acc).toString();
    }  
    return num;
};