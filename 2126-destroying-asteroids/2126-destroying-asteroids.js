/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b) => a-b)

    for (let i=0; i<asteroids.length; i++) {
        let curr = asteroids[i]
        if (curr > mass) return false
        else mass+= curr
    }
    return true
};