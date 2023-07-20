/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [], i = 0
    
    while (i < asteroids.length) {
        if (stack.length === 0) {
            stack.push(asteroids[i])
            i++
            continue
        }
        let top = stack[stack.length-1], topSign = Math.sign(top)
        if (topSign == 1 && asteroids[i] > 0 || topSign == -1 && (asteroids[i] < 0 || asteroids[i] > 0)) {
            stack.push(asteroids[i])
        } else {
            if (asteroids[i] + top < 0) {
                stack.pop(); 
                i--
            } else if (asteroids[i] + top > 0 && top > 0) {
                i++
                continue
            }
            else stack.pop()
        }
        i++
    }
    return stack
};