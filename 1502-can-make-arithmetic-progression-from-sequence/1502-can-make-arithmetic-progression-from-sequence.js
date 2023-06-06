/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    // arr.sort()
    // console.log(arr)
    // let diff = Math.abs(arr[1] - arr[0])
    // for (let i = 1; i<arr.length-1; i++) {
    //     let currDiff = Math.abs((arr[i+1]) - arr[i])
    //     console.log(currDiff, diff)
    //     if (currDiff !== diff) return false
    // }
    // return true
    
       if(arr.length < 3) return true
    arr.sort((a,b)=>{return a-b})
    let diff = arr[1] - arr[0]
    for(let i=2;i<arr.length;i++){
        if(arr[i] - arr[i-1] !== diff){
           return false
        }
    }
    return true
};