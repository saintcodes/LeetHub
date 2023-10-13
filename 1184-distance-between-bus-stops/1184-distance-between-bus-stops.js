/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  
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