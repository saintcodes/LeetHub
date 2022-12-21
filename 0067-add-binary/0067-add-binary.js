/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
//     let num1 = parseInt(a, 2)
//     let num2 = parseInt(b, 2)
//     let sum = num1+num2
//     return sum.toString(2)
};
