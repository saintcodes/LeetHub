/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return isValid(left + 1, right) || isValid(left, right - 1);
        }
        left++;
        right--;
    }
    
    return true;
    
    
    function isValid(left, right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
};
    
    
//     for (let [left, right]=[0, s.length-1]; left < right;) {
//         if (s[left] !== s[right]) {
//             let og = s
//             for (let i=0; i<s.length; i++) {
//                 let mutated = og.replace(og[i], '')
//                 console.log(og, og[i], mutated)
//                 for (let [left, right]=[0,mutated.length-1]; left<right;) {
//                     if (mutated[left] === mutated[right]) {
//                         return true
//                     }
//                     left++
//                     right--
//                 }
//             s = og
//             // i++
//             }
//         }
//         left++, right--
//         // s=og
//     }
//     return false
// }