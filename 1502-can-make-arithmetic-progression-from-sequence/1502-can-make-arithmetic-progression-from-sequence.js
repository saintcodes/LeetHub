/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a-b)
    let diff = arr[1] - arr[0]
    for (let i = 2; i<arr.length; i++) {
        let currDiff = arr[i] - arr[i-1]
        if (currDiff !== diff) return false
    }
    return true
};