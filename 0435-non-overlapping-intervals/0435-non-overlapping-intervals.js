/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]).sort((a,b) => a[1] - b[1])

    let remove = 0
    let lastCompared = -Infinity
    for (let i = 0; i<intervals.length; i++) {
        const [x, y] = intervals[i]
        console.log(x,y)
        if (x >= lastCompared) lastCompared = y
        else remove++
        // if (intervals[i][0] < intervals[lastCompared][1]) {
        //     console.log(intervals[i], intervals[lastCompared], i)
        //     lastCompared = i-1
        //     console.log('last', lastCompared)
        //     remove++
        // } else lastCompared = i
    }
    return remove
};