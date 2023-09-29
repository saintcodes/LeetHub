/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
     var r = Math.floor(Math.sqrt(c));
    var l = 0;
     
    while(l <= r){
        var sum  = l**2 + r**2
        if( sum === c){
            return true
        }else if(sum < c){
            l++
        }else{
            r--
        }
    }
    return false
};