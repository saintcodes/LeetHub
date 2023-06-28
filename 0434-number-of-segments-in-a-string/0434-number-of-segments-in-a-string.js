/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
//     let count = 0
//     for (let i=0; i < s.length; i++) {
//         if (i=0 || s[i-1] == ' ' && s[i] != "") {
//             count+=1
//         }
//     }
// //     let s1 = s.trim()
    
// //     if (s1 === '') return 0
// //     console.log(s.split(" "))
// //     return s.split(" ").length
//     console.log(count)
        return s.split(' ').filter((e) => e !== '').length;

};