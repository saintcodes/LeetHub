/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    //basic solution
    // let left = 0
    // let right = s.length-1
    // let temp
    
//     while(left<right){
//         temp = s[left]
//         s[left] = s[right]
//         s[right] = temp
        
//         left ++
//         right --
//     }

    //recursive solution
    //     if (s.length === 1) {
    //     return s[0]
    // }
    // return s[s.length-1]+reverseString(s.slice(0,-1))
    // // return [...reverseString(s.slice(1)), s[0]]

    let l = 0
    let r = s.length-1
    
    while (l <= r) {
        [s[l], s[r]] = [s[r], s[l]]
        l+= 1
        r-= 1
    }
    
};