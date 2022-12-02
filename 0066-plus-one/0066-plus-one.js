/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
//     let joinedNumber = parseInt(digits.join("")) +1
//     let num = joinedNumber.toString()
//     let splitNumber = []
//     for (char of num) {
//         splitNumber.push(char)
//     }
//     return splitNumber
    
    
// //     below solution does not work for test case [9]
//     // digits.splice(digits.length-1, 1, digits[digits.length-1]+1)
//     // return digits
// };

/*
    Initialize carry = 0
    Iterate through digits arry from last index - Add 1 and add carry
    If sum > 9, then carry = 1 
    O(n) time
    O(n) space
*/

    
    let carry = 1;
    let i = digits.length - 1;
    
    while (i > 0) {

        let val = digits[i] + carry;
        if (val > 9) {
            digits[i] = 0
            carry = 1;
        } else {
            digits[i] = digits[i] + carry;
            carry = 0;
        }
        i--;
    }
    
    if (digits[0] + carry > 9) {
        digits[0] = 0;
        digits.unshift(1);
    } else {
        digits[0] = digits[0] + carry;
    }
    
    return digits;
  
};