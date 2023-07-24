/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])

    let remove = 0
    let lastCompared = -Infinity
    for (let i = 0; i<intervals.length; i++) {
        const [x, y] = intervals[i]
        
        if (x >= lastCompared) lastCompared = y
        else remove++
    }
    return remove
};