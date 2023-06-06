/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    console.log(arr)
    let diff = arr[1] - arr[0]
    for (let i = 2; i<arr.length; i++) {
        let currDiff = arr[i] - arr[i-1]
        // console.log(arr[i])
        if (currDiff !== diff) return false
    }
    return true
    
    // arr.sort((a,b)=>{return a-b})
    // let diff = arr[1] - arr[0]
    // console.log(arr, diff)
    // for(let i=2;i<arr.length;i++){
    //     console.log(arr[i], arr[i-1], arr[i] - arr[i-1])
    //     if(arr[i] - arr[i-1] !== diff){
    //        return false
    //     }
    // }
    // return true
};