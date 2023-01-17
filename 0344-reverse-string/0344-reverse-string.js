/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    //basic solution
    let left = 0
    let right = s.length-1
    let temp
    
    while(left<right){
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        
        left ++
        right --
    }

    //recursive solution
    if (s.length === 1) {
        return s
    }
    return s + s.length-1
    
//     function sum(arr) {
// 	if (arr.length === 1) {
// 		return arr[0]
// 	}
// 	console.log(arr[0], sum(arr.slice(1)))
// 	return arr[0] + sum(arr.slice(1))
// }
    
};