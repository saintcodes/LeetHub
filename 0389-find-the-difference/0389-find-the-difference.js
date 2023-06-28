/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sArr = s.split('')
    let tArr = t.split('')
    let tEl = [...new Set(tArr)]
    console.log(tArr)
    console.log(tEl)
    
    let getFrequency = (arr, item) => {
        return arr.filter(x => x === item).length;
    };
    
    for (let c of tArr) {
        if ((getFrequency(sArr, c) != getFrequency(tArr, c))) return c;
    }
    
};

//     let sArr = s.split("");
//     let tArr = t.split("");
//     let tElement = [...new Set(tArr)];
//     for (const c of tElement) {
//         if ((getFrequency(sArr, c) != getFrequency(tArr, c))) return c;
//     }
// };

