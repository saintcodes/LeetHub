/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    //  start = 7, end = 2
    //  [1, 2, 3,4, 5, 6,7,8,9,10]
    //  [14,13,4,7,10,17,8,3,2,13]
    //  opt1 = 5+0+7+10 = 22
    //  opt2 = 1+12+11+14 = 38
    
    let op1, op2
    if (destination < start) {
        op1 = distance.splice(destination, start-destination).reduce((acc,cum) => acc+=cum)
        op2 = distance.reduce((acc, cum) => acc+=cum)

    } else {
        op1 = distance.splice(start, destination-start).reduce((acc, cum) => acc+=cum)
        op2 = distance.reduce((acc, cum) => acc+=cum)
    }
    
   
    return Math.min(op1, op2)
};