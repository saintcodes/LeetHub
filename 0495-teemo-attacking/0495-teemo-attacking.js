/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let seconds = 0
    for (let i=0; i <timeSeries.length; i++) {
        if ((timeSeries[i+1] - timeSeries[i]) < duration) {
            seconds += timeSeries[i+1]-timeSeries[i]
        } else {
            seconds += duration
        }
    }
    return seconds
    
//     let answer = 0
//     answer += Math.min(timeSeries.reduce((curr, acc) => curr + acc), duration)

//     return answer
    
    // let total = 0
    // for (let i = 0; i < timeSeries.length; i++) {
    //     let diff = timeSeries[i+1] - timeSeries[i]
    //     if (diff < duration) total += diff
    //     else total += duration
    // }
    // return total
};