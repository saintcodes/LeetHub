/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = {}
    for (let i=0; i< text.length; i++) {
        map[text[i]] = (map[text[i]] || 0) +1
    }
    
    return Math.floor(Math.min(map.b, map.a, map.l/2, map.o/2, map.n)) || 0
    
    
};