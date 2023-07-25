/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // for (let i=1; i<arr.length; i++) {
    //     if (arr[i] > arr[i+1]) return i
    // }
    
    let l = 1, r = arr.length-1
    let mid
    while (l < r) {
        mid = Math.floor((l+r)/2)
        if (arr[mid] < arr[mid+1]) l = mid+1
        else r = mid
    }
    
    return l
};