/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let sMap = {}, targetMap = {}, min = Infinity
    
    for (let i=0; i<s.length || i<target.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) +1
        targetMap[target[i]] = (targetMap[target[i]] || 0) +1
    }

    for (let key in targetMap) {
        if (key !== 'undefined') min = Math.floor(Math.min((sMap[key]/targetMap[key]), min))
    }
    
   return min || 0
};