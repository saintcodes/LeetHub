/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n ===1) return "1"
    let start = "11"
    while (n > 2) {
        start = toArray(start)
        n--
    }

function toArray(str) {
    let arr = [], count = 1, temp = str[0]
    
    
    for (let i=1; i<str.length; i++) {
        if (str[i] === temp) count++
        else {
            arr.push([count, temp])
            count = 1
            temp = str[i]
        }
        if (i+1 === str.length) arr.push([count, str[i]])
    }
    let flat = arr.flat()
    console.log(flat)
    let toNum = new Number
    for (let i of flat) toNum+=i
    
return toNum
}
    return start
};
