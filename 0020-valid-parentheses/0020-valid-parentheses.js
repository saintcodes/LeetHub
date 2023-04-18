/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    
    for (const b of s) {
        if (b === '(' || b === '{' || b === '[') {
            stack.push(b);
        } else if (!stack.length || map[stack.pop()] !== b) {
            return false;
        }
    }
    
    return !stack.length;
    // let stack = []
    // for (let i=0; i<s.length; i++) {
    //     if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
    //         stack.push(s[i])
    //         s = s.replace(s[i], '')
    //         console.log(s)
    //     }
    // }
    // console.log(stack)
    // console.log(s)
    // let map = {}
    // for (let i=0; i < s.length; i++) {
    //     map[s[i]] = 0 || +1
    // }    
    // for (let j in map) {
    //     if (map['('] && map['('] !== map[')']) return false
    //     if (map['['] && map['['] !== map[']']) return false
    //     if (map['{'] && map['{'] !== map['}']) return false
    // }
    // return true
};