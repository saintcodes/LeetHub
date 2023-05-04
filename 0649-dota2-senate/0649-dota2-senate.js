/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const stack = [], arr = senate.split('');

    for (let i = 0, count = 0; i < arr.length; i++) {
        if (!stack.length || stack.at(-1) === arr[i]) {
            stack.push(arr[i]);
            count++
        } else {
            arr.push(stack.pop());
            count++
        }
    }

    return stack[0] === 'R' ? 'Radiant' : 'Dire';
};