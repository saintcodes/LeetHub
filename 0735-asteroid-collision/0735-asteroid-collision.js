/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = []
    let i = 0
    while (i < asteroids.length) {
        if (stack.length === 0) {
            stack.push(asteroids[i])
            i++
            // console.log('1', stack)
            continue
        }
        let top = stack[stack.length-1], topSign = Math.sign(top)
        // console.log(top, 'top')
        if (topSign == 1 && asteroids[i] > 0 || topSign == -1 && (asteroids[i] < 0 || asteroids[i] > 0)) {
            stack.push(asteroids[i])
            // console.log('2', stack)
        } else {
        //handle if opposing signs
            //   -5 (+) 10 === 5 which is greater than 0
            if (asteroids[i] + top < 0) {
                // console.log('here', asteroids[i], top)
                stack.pop(); 
                i--
                // stack.push(asteroids[i])
            } else if (asteroids[i] + top > 0 && top > 0) {
                i++
                continue
            }
            else stack.pop()
        }
        i++
        // console.log(stack)
    }
    return stack
};