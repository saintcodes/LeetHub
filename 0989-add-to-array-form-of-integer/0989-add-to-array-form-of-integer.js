/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    
    return `${BigInt(num.join("")) + BigInt(k)}`.split("")
    
    //below does not work due to big nums.
    // let converted = parseInt(num.join("")) + k
    // let text = converted.toString()
    // return text.split('')
};

