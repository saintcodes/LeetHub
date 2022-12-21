/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
   // let aBin = parseInt(BigInt(a),2)
   // let bBin = parseInt(BigInt(b),2)
    const aBin = `0b${a}`
    const bBin = `0b${b}`
   console.log(aBin, bBin)
    const sum = BigInt(aBin) + BigInt(bBin)
    console.log(BigInt(aBin), BigInt(bBin))
    console.log(sum)
    return sum.toString(2)
};
