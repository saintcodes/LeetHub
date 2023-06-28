/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sArr = s.split('')
    let tArr = t.split('')
    let tEl = [...new Set(tArr)]

    
    let getFrequency = (arr, item) => {
        return arr.filter(x => x === item).length;
    };
    
    for (let c of tEl) if ((getFrequency(sArr, c) != getFrequency(tArr, c))) return c;  
};

