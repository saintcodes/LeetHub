/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    let sum=0

    for (let i=0; i<boxTypes.length; i++) {
        if (boxTypes[i][0] < truckSize) {
            sum+=boxTypes[i][0]*boxTypes[i][1]
            truckSize-=boxTypes[i][0]
        } else if (boxTypes[i][0] >= truckSize) {
            sum+=boxTypes[i][1]*truckSize
            truckSize-=truckSize
        }
    }
    return sum
};