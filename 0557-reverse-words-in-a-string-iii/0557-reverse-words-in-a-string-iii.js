/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let string = ''
    s.split(' ').forEach((word) => {
        word+=" "
        for (let i=word.length-1; i >=0; i--) {
            string+=word[i]
        }
    })
    return string.substring(1)
};