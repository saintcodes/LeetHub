/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    
    // let start = 0
    let base = 0
    let alt = [0]
    alt.push(gain[0])
    for (let i=0; i<gain.length; i++) {
        base += gain[i]
        alt.push(base)
    }
    alt.sort((a,b) => a-b)
    return alt[alt.length-1]
};