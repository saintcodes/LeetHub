/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    // console.log(aBin, bBin)
    const sum = BigInt(aBin) + BigInt(bBin)
    // console.log(BigInt(aBin), BigInt(bBin))
    // console.log(sum)
    // console.log(sum.toString(2))
    return sum.toString(2)
};
