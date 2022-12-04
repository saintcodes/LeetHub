/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = '' + x;
    console.log(string, typeof(string))
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] !== string[right]) return false;
        left++;
        right--;
     }
      return true;
};